import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const BarChart = ({ Disponibilidade, Performance, Qualidade, OEE }) => {
  const dispRef = useRef(null);
  const perfRef = useRef(null);
  const qualRef = useRef(null);
  const oeeRef = useRef(null);

  useEffect(() => {
    // Gráfico de Disponibilidade
    const grafDisponibilidade = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      series: [parseFloat(Disponibilidade.toFixed(2))],
      labels: ['Disponibilidade'],
      colors: ['#000000']
    };
    const chartDisp = new ApexCharts(dispRef.current, grafDisponibilidade);
    chartDisp.render();

    // Gráfico de Performance
    const grafPerformance = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      series: [parseFloat(Performance.toFixed(2))],
      labels: ['Performance'],
      colors: ['#000000']
    };
    const chartPerf = new ApexCharts(perfRef.current, grafPerformance);
    chartPerf.render();

    // Gráfico de Qualidade
    const grafQualidade = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      series: [parseFloat(Qualidade.toFixed(2))],
      labels: ['Qualidade'],
      colors: ['#000000']
    };
    const chartQua = new ApexCharts(qualRef.current, grafQualidade);
    chartQua.render();

    // Gráfico de OEE
    const grafOEE = {
      chart: {
        height: 350,
        type: 'radialBar',    
      },
      series: [parseFloat(OEE.toFixed(2))],
      labels: ['OEE'],
      colors: ['#000000'],
    
    };
    const chartOEE = new ApexCharts(oeeRef.current, grafOEE);
    chartOEE.render();

    return () => {
      chartDisp.destroy();
      chartPerf.destroy();
      chartQua.destroy();
      chartOEE.destroy();
    };
  }, [Disponibilidade, Performance, Qualidade, OEE]);

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div ref={dispRef} id="grafDisponibilidade" className="p-2">
            {/* Gráfico Disponibilidade */}
          </div>
        </div>
        <div className="col-md-3">
          <div ref={perfRef} id="grafPerformance" className="p-2">
            {/* Gráfico Performance */}
          </div>
        </div>
        <div className="col-md-3">
          <div ref={qualRef} id="grafQualidade" className="p-2">
            {/* Gráfico Qualidade */}
          </div>
        </div>
        <div className="col-md-3">
          <div ref={oeeRef} id="grafOEE" className="p-2">
            {/* Gráfico OEE */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
