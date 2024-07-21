// BarChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ Disponibilidade, Performance, Qualidade, OEE }) => {
  
  //Grafico de Disponibilidade
  var grafDisponibilidade = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    series: [parseFloat(Disponibilidade.toFixed(2))],
    labels: ['Disponibilidade'],
  }
  
  var chartDisp = new ApexCharts(document.getElementById("grafDisponibilidade"), grafDisponibilidade);
  
  chartDisp.render();
  //______________________________________________________________________________________________
  // Grafico de Performance
  var grafPerformance = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    series: [parseFloat(Performance.toFixed(2))],
    labels: ['Performance'],
  }
  
  var chartPerf = new ApexCharts(document.getElementById("grafPerformance"), grafPerformance);
  
  chartPerf.render();
  //______________________________________________________________________________________________
  // Grafico de Qualidade
  var grafQualidade = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    series: [parseFloat(Qualidade.toFixed(2))],
    labels: ['Qualidade'],
  }
  
  var chartQua = new ApexCharts(document.getElementById("grafQualidade"), grafQualidade);
  
  chartQua.render();
  //______________________________________________________________________________________________
  // Grafico de OEE

  var grafOEE = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    series: [parseFloat(OEE.toFixed(2))],
    labels: ['OEE'],
  }
  
  var chartOEE = new ApexCharts(document.getElementById("grafOEE"), grafOEE);
  
  chartOEE.render();
  return (
    <div>
      {/* <Chart options={options} series={series} type="bar" height={300} width={600}/> */}
      
      <div className="row">
        <div className="col-md-3">
          <div id="grafDisponibilidade" className=" p-2">
            {/* Gráfico Disponibilidade */}
          </div>
        </div>
        <div className="col-md-3">
          <div id="grafPerformance" className=" p-2">
            {/* Gráfico Performance */}
          </div>
        </div>
        <div className="col-md-3">
          <div id="grafQualidade" className=" p-2">
            {/* Gráfico Qualidade */}
          </div>
        </div>
        <div className="col-md-3">
          <div id="grafOEE" className=" p-2">
            {/* Gráfico OEE */}
          </div>
        </div>
      </div>


    </div>
  );
};

export default BarChart;