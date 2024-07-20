// BarChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({Disponibilidade, Performance, Qualidade, OEE}) => {
  const options = {
    chart: {
      type: 'bar'
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%'
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Disponibilidade', 'Performance', 'Qualidade','OEE']
    }
  };

  const series = [
    {
      name: 'Sales',
      data: [Disponibilidade, Performance, Qualidade, OEE]
    }
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={300} width={600}/>
    </div>
  );
};

export default BarChart;