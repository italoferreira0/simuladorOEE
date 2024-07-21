import React from 'react';
import Chart from 'react-apexcharts';

function GrafProducao({ prodRealFloat,ProdEsperada,producaoTeorica,pecasReprovadas}) {
   

    const options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Produção', // Nome da série pode ser importante para algumas configurações
            data: [parseFloat(producaoTeorica).toFixed(0), parseFloat(prodRealFloat).toFixed(0), 
                parseFloat(ProdEsperada).toFixed(0), parseFloat(pecasReprovadas).toFixed(0)]
        }],
        xaxis: {
            categories: ['Produção Teórica', 'Produção Real', 'Produção Esperada', 'Peças Reprovadas']
        },
        colors: ['#2e8b57'] // Ajuste as cores conforme necessário
    };

    return (
        <div className="col-md-6 d-flex ">
            <Chart options={options} series={options.series} type="bar" height={350} width={1000} />
        </div>
    );
}

export default GrafProducao;
