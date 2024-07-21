// BarChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ Disponibilidade, Performance, Qualidade, OEE }) => {
  
  //Grafico de Disponibilidade
  var grafDisponibilidade = {
    chart: {
      height: 250,
      type: "radialBar",
    },

    series: [parseFloat(Disponibilidade.toFixed(2))],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"  // nome interno
          },
          value: {
            color: "#fff",
            fontSize: "30px", //
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Disponibilidade"],
    fontSize: "20px"
  };

  var chart = new ApexCharts(document.getElementById("grafDisponibilidade"), grafDisponibilidade);

  chart.render();
  //______________________________________________________________________________________________
  // Grafico de Performance
  var grafPerformance = {
    chart: {
      height: 280,
      type: "radialBar",
    },

    series: [parseFloat(Performance.toFixed(2))],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Performance"]
  };

  var chart = new ApexCharts(document.getElementById("grafPerformance"), grafPerformance);

  chart.render();
  //______________________________________________________________________________________________
  // Grafico de Qualidade
  var grafQualidade = {
    chart: {
      height: 280,
      type: "radialBar",
    },

    series: [parseFloat(Qualidade.toFixed(2))],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Qualidade"]
  };

  var chart = new ApexCharts(document.getElementById("grafQualidade"), grafQualidade);

  chart.render();
  //______________________________________________________________________________________________
  // Grafico de OEE

  var grafOEE = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    series: [parseFloat(Qualidade.toFixed(2))],
    labels: ['OEE'],
  }
  
  var chart = new ApexCharts(document.getElementById("grafOEE"), grafOEE);
  
  chart.render();
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