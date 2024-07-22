import React from 'react';
import Chart from 'react-apexcharts';
import '../style/GrafBarras.css'

function GraficoBarras({ prodRealFloat, ProdEsperada, producaoTeorica, pecasReprovadas,
    dia, HtrabalhadaFloat, ParadaPlanFloat, ParadaNplan, tempoPlan }) {
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

    const optionsParadas = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Tempo',
            data: [parseFloat(tempoPlan).toFixed(2), parseFloat(HtrabalhadaFloat).toFixed(2),
            parseFloat(ParadaPlanFloat).toFixed(2), parseFloat(ParadaNplan).toFixed(2),]
        }],
        xaxis: {
            categories: ['Tempo Planejado', 'Tempo de Produção', 'Parada Planejada', 'Parada Não Planejada']
        },
        colors: ['#1e5fe6']
    };

    return (
        <div className="d-flex flex-wrap justify-content-center mr-2 mt-4 mb-4 GrafBarras">
            <div className="col-md-5 d-flex justify-content-center mt-4 mb-4 GrafProdução">
                <Chart options={optionsProducao} series={optionsProducao.series} type="bar" height={400} width={390} />
            </div>
            <div className="col-md-5 d-flex justify-content-center mt-4 mb-4 GrafParada">
                <Chart options={optionsParadas} series={optionsParadas.series} type="bar" height={400} width={390} />
            </div>
        </div>
    );
}

export default GraficoBarras;