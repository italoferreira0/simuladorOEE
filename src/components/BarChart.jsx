import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import '../style/BarChart.css'

const BarChart = ({ Disponibilidade, Performance, Qualidade, OEE }) => {
  const dispRef = useRef(null);
  const perfRef = useRef(null);
  const qualRef = useRef(null);
  const oeeRef = useRef(null);

  useEffect(() => {

    // Logica de Cores
    // Disponibilidade
    let disponibilidadeColor;
    if (Disponibilidade >= 80) {
      disponibilidadeColor = '#0a5c0a'
    }else if (Disponibilidade < 80 && Disponibilidade >= 60) {
      disponibilidadeColor = '#FFFF00'
    }else if( Disponibilidade > 0 && Disponibilidade < 60){
      disponibilidadeColor = '#FF0000'
    }else{
      disponibilidadeColor = '#000000'
    }
    // Performance
    let performanceColor;
    if (Performance >= 80) {
      performanceColor = '#0a5c0a'
    }else if (Performance < 80 && Performance >= 60) {
      performanceColor = '#FFFF00'
    }else if( Performance > 0 && Performance < 60){
      performanceColor = '#b81414'
    }else{
      performanceColor = '#000000'
    }

    // Qualidade
    let qualidadeColor;
    if (Qualidade >= 80) {
      qualidadeColor = '#0a5c0a'
    }else if (Qualidade < 80 && Qualidade >= 60) {
      qualidadeColor = '#FFFF00'
    }else if( Qualidade > 0 && Qualidade < 60){
      qualidadeColor = '#FF0000'
    }else{
      qualidadeColor = '#000000'
    }

    // OEE
    let oeeColor;
    if (OEE >= 80) {
      oeeColor = '#0a5c0a'
    }else if (OEE < 80 && OEE >= 60) {
      oeeColor = '#FFFF00'
    }else if( OEE > 0 && OEE < 60){
      oeeColor = '#FF0000'
    }else{
      oeeColor = '#000000'
    }
    //_________________________________________________________________________________________

    // Gráfico de Disponibilidade
    const grafDisponibilidade = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      series: [parseFloat(Disponibilidade.toFixed(2))],
      labels: ['Disponibilidade'],
      colors: [disponibilidadeColor]
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
      colors: [performanceColor]
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
      colors: [qualidadeColor]
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
      colors: [oeeColor],
    
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
    <div className='mt-5'>
      <div className="row BarChar ">
        <div className="col-md-3 ">
          <div ref={dispRef} id="grafDisponibilidade" className="p-2 divStyle ml-1">
            {/* Gráfico Disponibilidade */}
          </div>
        </div>
        <div className="col-md-3">
          <div ref={perfRef} id="grafPerformance" className="p-2 divStyle">
            {/* Gráfico Performance */}
          </div>
        </div>
        <div className="col-md-3">
          <div ref={qualRef} id="grafQualidade" className="p-2 divStyle">
            {/* Gráfico Qualidade */}
          </div>
        </div>
        <div className="col-md-3">
          <div ref={oeeRef} id="grafOEE" className="p-2 divStyle">
            {/* Gráfico OEE */}
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default BarChart;
