import { Alert, Button } from 'bootstrap'
import '../style/DivMaster.css'
import { useState } from 'react'
import BarChart from './BarChart'
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import GrafOEETotal from './GrafOEETotal';
import GrafParadas from './GrafParadas';
import GrafProducao from './GrafProducao';
import GraficoBarras from './GraficoBarras';


function DivMaster({ children }) {
    const [Htrabalhada, setHtrabalhada] = useState(0)//Conectando input com variavel.
    const [ParadaPlan, setParadaPlan] = useState(0)
    const [cavidades, setCavidades] = useState(0)
    const [ciclo, setCiclo] = useState(0)
    const [prodReal, setprodReal] = useState(0)
    const [peso, setPeso] = useState(0)
    const [rejeito, setRejeito] = useState(0)

    //Variaveis
    let dia = 24 
    const HtrabalhadaFloat = parseFloat(Htrabalhada)//Atribuindo tipo a variavel.
    const ParadaPlanFloat = parseFloat(ParadaPlan)
    const cavidadesFloat = parseFloat(cavidades)
    const cicloFloat = parseFloat(ciclo)
    const prodRealFloat = parseFloat(prodReal)
    const pesoFloat = parseFloat(peso)
    const rejeitoFloat = parseFloat(rejeito)
    let ParadaNplan = HtrabalhadaFloat == 0 ? 0: dia - (HtrabalhadaFloat + ParadaPlanFloat)
    let ProdEsperada = prodRealFloat === 0 ? 0 : (prodRealFloat + (rejeitoFloat * 1000 / pesoFloat));
    let pecasReprovadas = ProdEsperada - prodRealFloat
    let tempoPlan = HtrabalhadaFloat === 0 ? 0 : dia - ParadaPlan

    function ProdTeorica(HtrabalhadaFloat, cavidadesFloat, cicloFloat) {//Função de Calculo de Produção Teórica
        if (Htrabalhada == 0||cavidadesFloat == 0|| cicloFloat == 0 ) {
            return(0)
        }
        return ((3600 / cicloFloat) * cavidadesFloat * HtrabalhadaFloat);
    }
    const producaoTeorica = ProdTeorica(HtrabalhadaFloat, cavidadesFloat, cicloFloat);

    //__________________________________________________________________________________________________________
    function fun_Performance(prodRealFloat, producaoTeorica) {//Função de Calculo de Performance
        if (prodRealFloat == 0) {
            return 0
        } else { return (prodRealFloat / producaoTeorica) * 100 }
    }
    const Performance = fun_Performance(prodRealFloat, producaoTeorica)


    //__________________________________________________________________________________________________________
    function fun_Disponibilidade(HtrabalhadaFloat, ParadaPlanFloat, dia, ParadaNplan) {//Função de Calculo de Disponibilidade
        if (HtrabalhadaFloat == 0) {
            return 0
        } else if (ParadaPlan == 0) {
            return HtrabalhadaFloat / dia * 100
        } else {
            return HtrabalhadaFloat / (dia - ParadaPlanFloat) * 100
        }
    }
    const Disponibilidade = fun_Disponibilidade(HtrabalhadaFloat, ParadaPlanFloat, dia);

    //__________________________________________________________________________________________________________
    function fun_Qualidade(prodRealFloat, pesoFloat, rejeitoFloat) { //Função de Calculo de Qualidade
        if (prodRealFloat == 0) {
            return 0
        } else if (prodRealFloat > 0 && rejeitoFloat == 0) {
            return prodRealFloat / prodRealFloat * 100
        } else if (prodRealFloat > 0 && rejeitoFloat > 0) {
            return (prodRealFloat / (prodRealFloat + (rejeitoFloat * 1000 / pesoFloat))) * 100
        } else {
            return 0
        }

    }
    const Qualidade = fun_Qualidade(prodRealFloat, pesoFloat, rejeitoFloat)
    //__________________________________________________________________________________________________________

    function fun_OEE(Performance, Qualidade, Disponibilidade) { //Função de Calculo de OEE
        return (Performance / 100 * Qualidade / 100 * Disponibilidade / 100) * 100
    }
    const OEE = fun_OEE(Performance, Qualidade, Disponibilidade)



    function Limpar(OEE, Qualidade, Performance, Disponibilidade) {
        setCavidades(0)
        setCiclo(0)
        setHtrabalhada(0)
        setParadaPlan(0)
        setPeso(0)
        setRejeito(0)
        setprodReal(0)

    }


    return (

        <div class="container  DivMaster">
            <div class="row">
               
                <div class="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0">
                    <div class="row w-100 mb-3">
                        <div class="col-12">
                            <span>Horas Planejadas</span>
                            <input type="number" class="form-control bg-dark text-white" disabled value={tempoPlan} />
                        </div>
                        <div class="col-12 mt-2">
                            <span>Horas Trabalhadas</span>
                            <input type="number" class="form-control bg-primary text-white" value={Htrabalhada}
                                onChange={event => { setHtrabalhada(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-12 mb-3">
                            <span>Tempo Parada não Planejada</span>
                            <input type="number" class="form-control bg-dark text-white" disabled value={ParadaNplan} />
                        </div>
                        <div class="col-12">
                            <span>Tempo Parada Planejada</span>
                            <input type="number" class="inputAzul form-control bg-primary text-white" value={ParadaPlan}
                                onChange={event => { setParadaPlan(event.target.value); }} />
                        </div>
                    </div>
                </div>

                
                <div class="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0">
                    <div class="row w-100 mb-3">
                        <div class="col-12">
                            <span>Cavidades</span>
                            <input type="number" class="form-control bg-success text-white" value={cavidades}
                                onChange={event => { setCavidades(event.target.value); }} />
                        </div>
                        <div class="col-12 mt-2">
                            <span>Tempo de Ciclo</span>
                            <input type="number" class="form-control bg-success text-white" value={ciclo}
                                onChange={event => { setCiclo(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-12 mb-3">
                            <span>Produção Teórica</span>
                            <input type="number" class="form-control bg-dark text-white" disabled value={producaoTeorica.toFixed(0)} />
                        </div>
                        <div class="col-12">
                            <span>Produção Real</span>
                            <input type="number" class="form-control bg-success text-white" value={prodReal}
                                onChange={event => { setprodReal(event.target.value); }} />
                        </div>
                    </div>
                </div>

              
                <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <div class="row w-100 mb-3">
                        <div class="col-12">
                            <span>Peso da Peça(g)</span>
                            <input type="number" class="form-control bg-warning text-black" value={peso}
                                onChange={event => { setPeso(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100 mb-3">
                        <div class="col-12">
                            <span>Rejeito(Kg)</span>
                            <input type="number" class="form-control bg-warning text-black" value={rejeito}
                                onChange={event => { setRejeito(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100 mb-3">
                        <div class="col-12">
                            <span>Produção Esperada</span>
                            <input type="number" class="form-control bg-dark text-white" value={ProdEsperada.toFixed(0)} disabled />
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-12">
                            <span>Peças Reprovadas</span>
                            <input type="number" class="form-control bg-dark text-white" value={pecasReprovadas.toFixed(0)} disabled />
                        </div>
                    </div>
                </div>
            </div>

         
            <div class="row justify-content-center mb-4">
                <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <button type="button" class="btn btn-dark" onClick={Limpar}>Limpar</button>
                </div>
            </div>

          
            <div class="row justify-content-center">
                <div class="col-12 col-md-2 text-center">
                    <span>Disponibilidade</span>
                    <input type="text" class="form-control bg-dark text-white" id="disponibilidade" disabled value={Disponibilidade.toFixed(2) + "%"} />
                </div>
                <div class="col-12 col-md-1 text-center">
                    <span class="simbolos">X</span>
                </div>
                <div class="col-12 col-md-2 text-center">
                    <span>Performance</span>
                    <input type="text" class="form-control bg-dark text-white" id="performance" disabled value={Performance.toFixed(2) + "%"} />
                </div>
                <div class="col-12 col-md-1 text-center">
                    <span class="simbolos">X</span>
                </div>
                <div class="col-12 col-md-2 text-center">
                    <span>Qualidade</span>
                    <input type="text" class="form-control bg-dark text-white" id="qualidade" disabled value={Qualidade.toFixed(2) + "%"} />
                </div>
                <div class="col-12 col-md-1 text-center">
                    <span class="simbolos">=</span>
                </div>
                <div class="col-12 col-md-2 text-center">
                    <span>OEE</span>
                    <input type="text" class="form-control bg-dark text-white" id="oee" disabled value={OEE.toFixed(2) + "%"} />
                </div>
            </div>
            {React.Children.map(children, child =>
                React.cloneElement(child, { Disponibilidade, Performance, Qualidade, OEE, dia, 
                    HtrabalhadaFloat, ParadaPlanFloat, ParadaNplan,HtrabalhadaFloat, 
                    prodRealFloat,ProdEsperada,producaoTeorica,pecasReprovadas,tempoPlan
                })
            )}
        </div>

    )
}

export default DivMaster