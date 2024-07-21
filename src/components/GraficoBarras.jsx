import React from 'react';
import Chart from 'react-apexcharts';

function GraficoBarras({ prodRealFloat, ProdEsperada, producaoTeorica, pecasReprovadas, dia, HtrabalhadaFloat, ParadaPlanFloat, ParadaNplan }) {
    // Configurações para o gráfico de produção
    const optionsProducao = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Produção',
            data: [parseFloat(producaoTeorica).toFixed(0), parseFloat(prodRealFloat).toFixed(0), 
                parseFloat(ProdEsperada).toFixed(0), parseFloat(pecasReprovadas).toFixed(0)]
        }],
        xaxis: {
            categories: ['Produção Teórica', 'Produção Real', 'Produção Esperada', 'Peças Reprovadas']
        },
        colors: ['#2e8b57']
    };

    // Configurações para o gráfico de paradas
    let tempoPlan = dia - ParadaPlanFloat;
    const optionsParadas = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Tempo',
            data: [tempoPlan, HtrabalhadaFloat, ParadaPlanFloat, ParadaNplan]
        }],
        xaxis: {
            categories: ['Tempo Planejado', 'Tempo de Produção', 'Parada Planejada', 'Parada Não Planejada']
        },
        colors: ['#1e5fe6']
    };

    return (
        <div className="d-flex flex-wrap justify-content-between mt-4">
            
            <div className="col-md-6 d-flex mb-4">
                <Chart options={optionsProducao} series={optionsProducao.series} type="bar" height={400} width={450} />
            </div>
            <div className="col-md-6 d-flex mb-4">
                <Chart options={optionsParadas} series={optionsParadas.series} type="bar" height={400} width={450} />
            </div>
        </div>
    );
}

export default GraficoBarras;