import { Alert, Button } from 'bootstrap'
import '../style/DivMaster.css'
import { useState } from 'react'
import Graficos from './Graficos'
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';


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
    let ParadaNplan = dia - HtrabalhadaFloat -ParadaPlanFloat

    function ProdTeorica(HtrabalhadaFloat, cavidadesFloat, cicloFloat) {//Função de Calculo de Produção Teórica
        return ((3600 / cicloFloat) * cavidadesFloat * HtrabalhadaFloat);
    }
    const producaoTeorica = ProdTeorica(HtrabalhadaFloat, cavidadesFloat, cicloFloat);

    //__________________________________________________________________________________________________________
    function fun_Performance(prodRealFloat, producaoTeorica) {//Função de Calculo de Performance
        if (prodRealFloat == 0) {
            return 0
        }else{return (prodRealFloat / producaoTeorica) * 100}
    }
    const Performance = fun_Performance(prodRealFloat, producaoTeorica)

    //__________________________________________________________________________________________________________
    function fun_Disponibilidade(HtrabalhadaFloat, ParadaPlanFloat, dia) {//Função de Calculo de Disponibilidade
        if (HtrabalhadaFloat == 0|| ParadaPlanFloat == 0) {
            return 0
        }else{return (HtrabalhadaFloat / (dia - ParadaPlanFloat)) * 100}
    }
    const Disponibilidade = fun_Disponibilidade(HtrabalhadaFloat, ParadaPlanFloat, dia);

    //__________________________________________________________________________________________________________
    function fun_Qualidade(prodRealFloat, pesoFloat, rejeitoFloat) { //Função de Calculo de Qualidade
        if (prodRealFloat == 0 || pesoFloat == 0||rejeitoFloat == 0) {
            return 0
        }else{
            return (prodRealFloat / (prodRealFloat + (rejeitoFloat * 1000 / pesoFloat))) * 100
        }
        
    }
    const Qualidade = fun_Qualidade(prodRealFloat, pesoFloat, rejeitoFloat)
    //__________________________________________________________________________________________________________

    function fun_OEE(Performance, Qualidade, Disponibilidade) { //Função de Calculo de OEE
        return (Performance / 100 * Qualidade / 100 * Disponibilidade / 100) * 100
    }
    const OEE = fun_OEE(Performance, Qualidade, Disponibilidade)
    

    function Limpar(OEE,Qualidade,Performance,Disponibilidade) {
        setCavidades(0)
        setCiclo(0)
        setHtrabalhada(0)
        setParadaPlan(0)
        setPeso(0)
        setRejeito(0)
        setprodReal(0)

    }
    
    
    return (
        
        <div class="container  ">
            <div class="row">
                <div class="col-12 col-md-4 d-flex flex-column align-items-start ">
                    <div class="row w-100">
                        <div class="col-8">
                            <span>Horas Planejadas</span>
                            <input type="number" class=" form-control bg-dark text-white " disabled value={dia} />
                        </div>
                        <div class="col-8">
                            <span>Horas Trabalhadas</span>
                            <input type="number" class=" form-control bg-primary text-white" value={Htrabalhada}
                                onChange={event => { setHtrabalhada(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-8">
                            <span>Tempo Parada não Planejada</span>
                            <input type="number" class=" form-control bg-dark text-white" disabled value={ParadaNplan} />
                        </div>
                        <div class="col-8">
                            <span>Tempo Parada Planejada</span>
                            <input type="number" class="inputAzul form-control bg-primary text-white" value={ParadaPlan}
                                onChange={event => { setParadaPlan(event.target.value); }} />
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 d-flex flex-column align-items-center ">
                    <div class="row w-100">
                        <div class="col-8">
                            <span>Cavidades</span>
                            <input type="number" class=" form-control bg-success  text-white " value={cavidades}
                                onChange={event => { setCavidades(event.target.value); }} />
                        </div>
                        <div class="col-8">
                            <span>Tempo de Ciclo</span>
                            <input type="number" class=" form-control bg-success  text-white" value={ciclo}
                                onChange={event => { setCiclo(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-8">
                            <span>Produção Teórica</span>
                            <input type="number" class=" form-control bg-dark  text-white" disabled value={producaoTeorica.toFixed(0)} />
                        </div>
                        <div class="col-8">
                            <span>Produção Real</span>
                            <input type="number" class=" form-control bg-success  text-white" value={prodReal}
                                onChange={event => { setprodReal(event.target.value); }} />
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 d-flex flex-column align-items-end ">
                    <div class="row w-100">
                        <div class="col-8">
                            <span>Peso da Peça(g)</span>
                            <input type="number" class=" form-control bg-warning   text-black" value={peso}
                                onChange={event => { setPeso(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-8">
                            <span>Rejeito(Kg)</span>
                            <input type="number" class="inputVerde form-control bg-warning   text-black" value={rejeito}
                                onChange={event => { setRejeito(event.target.value); }} />
                        </div>
                    </div>
                </div>

                <div class="container d-flex justify-content-center align-items-center vh-10">
                    <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center DivBotoes">
                        <div class="row w-100">
                            <div class="col-12 text-center">
                                {/* <button type="button" class="btn btn-dark btn-custom" onClick={Calcular}>Calcular</button> */}
                                <button type="button" class="btn btn-dark btn-custom" onClick={Limpar}>Limpar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container d-flex justify-content-center align-items-center vh-10">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-2 text-center">
                            <span>Disponibilidade</span>
                            <input type="text" class="Resultados form-control bg-dark text-white" id="disponibilidade" disabled value={Disponibilidade.toFixed(2)+"%"}/>
                        </div>
                        <div class="col-12 col-md-1 text-center">
                            <span class="simbolos">X</span>
                        </div>
                        <div class="col-12 col-md-2 text-center">
                            <span>Performance</span>
                            <input type="text" class="Resultados form-control bg-dark text-white" id="performance" disabled value={Performance.toFixed(2)+"%"}/>
                        </div>
                        <div class="col-12 col-md-1 text-center ">
                            <span class="simbolos">X</span>
                        </div>
                        <div class="col-12 col-md-2 text-center">
                            <span>Qualidade</span>
                            <input type="text" class="Resultados form-control bg-dark text-white" id="qualidade" disabled value={Qualidade.toFixed(2)+"%"}/>
                        </div>
                        <div class="col-12 col-md-1 text-center">
                            <span class="simbolos">=</span>
                        </div>
                        <div class="col-12 col-md-2 text-center">
                            <span>OEE</span>
                            <input type="text" class="Resultados form-control bg-dark text-white" id="oee" disabled value={OEE.toFixed(2)+"%"}/>
                        </div>
                    </div>
                </div>

                

            </div>

            {React.Children.map(children,child => 
                React.cloneElement(child, {Disponibilidade, Performance, Qualidade, OEE})
            )}
        </div>

    )
}

export default DivMaster