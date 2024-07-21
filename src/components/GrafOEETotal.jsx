import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import '../style/GrafOEETotal.css'

function GrafOEETotal({ Disponibilidade, Performance, Qualidade, OEE }) {
    const chartRef = useRef(null);

    useEffect(() => {
        const OEETotal = {
            chart: {
                height: 280,
                type: "radialBar",
            },
            series: [
                parseFloat(Disponibilidade).toFixed(2), 
                parseFloat(Performance).toFixed(2), 
                parseFloat(Qualidade).toFixed(2), 
                parseFloat(OEE).toFixed(2)
            ],
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        total: {
                            show: true,
                            label: 'OEE TOTAL',
                            formatter: () => `${OEE.toFixed(2)}%`
                        }
                    }
                }
            },
            labels: ['Disponibilidade', 'Performance','Qualidade' , 'OEE']
        };

        const chart = new ApexCharts(chartRef.current, OEETotal);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, [Disponibilidade, Performance, Qualidade, OEE]);

    return (
        <div ref={chartRef} className='GrafOEETotal col-md-5 mx-auto mt-0'></div>
    );
}

export default GrafOEETotal;