import React from 'react';
import Chart from 'react-apexcharts';

function GrafParadas({ dia, HtrabalhadaFloat, ParadaPlanFloat, ParadaNplan }) {
    let tempoPlan = dia - ParadaPlanFloat;

    const options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Tempo', // Nome da série pode ser importante para algumas configurações
            data: [tempoPlan, HtrabalhadaFloat, ParadaPlanFloat, ParadaNplan]
        }],
        xaxis: {
            categories: ['Tempo Planejado', 'Tempo de Produção', 'Parada Planejada', 'Parada Não Planejada']
        },
        colors: ['#1e5fe6'] // Ajuste as cores conforme necessário
    };

    return (
        <div className="col-md-6 d-flex ">
            <br />
            <Chart options={options} series={options.series} type="bar" height={350} width={1000} />
            <br />
        </div>
    );
}

export default GrafParadas;
