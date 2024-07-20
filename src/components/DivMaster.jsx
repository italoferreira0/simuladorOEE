import { Alert, Button } from 'bootstrap'
import '../style/DivMaster.css'
import { useState } from 'react'


function DivMaster() {
    const [Htrabalhada, setHtrabalhada] = useState('')//Conectando input com variavel.
    const [ParadaPlan, setParadaPlan] = useState('')
    const [cavidades, setCavidades] = useState('')
    const [ciclo, setCiclo] = useState('')
    const [prodReal, setprodReal] = useState('')
    const [peso, setPeso] = useState('')
    const [rejeito, setRejeito] = useState('')

    //Variaveis
    let dia = 24
    const HtrabalhadaFloat = parseFloat(Htrabalhada)//Atribuindo tipo a variavel.
    const ParadaPlanFloat = parseFloat(ParadaPlan)
    const cavidadesFloat = parseFloat(cavidades)
    const cicloFloat = parseFloat(ciclo)
    const prodRealFloat = parseFloat(prodReal)
    const pesoFloat = parseFloat(peso)
    const rejeitoFloat = parseFloat(rejeito)

    function ProdTeorica(HtrabalhadaFloat, cavidadesFloat, cicloFloat) {//Função de Calculo de Produção Teórica
        return ((3600 / cicloFloat) * cavidadesFloat * HtrabalhadaFloat);
    }
    const producaoTeorica = ProdTeorica(HtrabalhadaFloat, cavidadesFloat, cicloFloat);

    //__________________________________________________________________________________________________________
    function fun_Performance(prodRealFloat, producaoTeorica) {//Função de Calculo de Performance
        return (prodRealFloat / producaoTeorica) * 100
    }
    const Performance = fun_Performance(prodRealFloat, producaoTeorica)

    //__________________________________________________________________________________________________________
    function fun_Disponibilidade(HtrabalhadaFloat, ParadaPlanFloat, dia) {//Função de Calculo de Disponibilidade
        return (HtrabalhadaFloat / (dia - ParadaPlanFloat)) * 100;
    }
    const Disponibilidade = fun_Disponibilidade(HtrabalhadaFloat, ParadaPlanFloat, dia);
    //__________________________________________________________________________________________________________
    function fun_Qualidade(prodRealFloat, pesoFloat, rejeitoFloat) { //Função de Calculo de Qualidade
        return (prodRealFloat / (prodRealFloat + (rejeitoFloat * 1000 / pesoFloat))) * 100
    }
    const Qualidade = fun_Qualidade(prodRealFloat, pesoFloat, rejeitoFloat)
    //__________________________________________________________________________________________________________

    function fun_OEE(Performance, Qualidade, Disponibilidade) { //Função de Calculo de Qualidade
        return (Performance / 100 * Qualidade / 100 * Disponibilidade / 100) * 100
    }
    const OEE = fun_OEE(Performance, Qualidade, Disponibilidade)


    function Limpar() {
        setCavidades('')
        setCiclo('')
        setHtrabalhada('')
        setParadaPlan('')
        setPeso('')
        setRejeito('')
        setprodReal('')

    }


    function Calcular() {
        console.log('Hora Trabalhada', HtrabalhadaFloat)
        console.log('Parada Planejada', ParadaPlanFloat)
        console.log('Cavidades ', cavidadesFloat)
        console.log('Ciclo ', cicloFloat)
        const producaoTeorica = ProdTeorica(HtrabalhadaFloat, cavidadesFloat, cicloFloat);
        const Disponibilidade = fun_Disponibilidade(dia, HtrabalhadaFloat, HtrabalhadaFloat)
        console.log('Produção terorica: ', producaoTeorica)
        console.log('Produção Real: ', prodRealFloat)
        console.log('Peso: ', pesoFloat)
        console.log('Rejeito: ', rejeito)
        console.log('Disponibilidade%: ', Disponibilidade)


    }


    return (
        
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4 d-flex flex-column align-items-start Div1">
                    <div class="row w-100">
                        <div class="col-12">
                            <span>Horas Planejadas</span>
                            <input type="number" class="inputVerdeEscuro form-control" disabled value={dia} />
                        </div>
                        <div class="col-12">
                            <span>Horas Trabalhadas</span>
                            <input type="number" class="inputVerde form-control" value={Htrabalhada}
                                onChange={event => { setHtrabalhada(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-12">
                            <span>T. Parada não Planejada</span>
                            <input type="number" class="inputAzul form-control" disabled value={ParadaPlan}
                            onChange={event => {setParadaPlan(event.target.value); }}
                            />
                        </div>
                        <div class="col-12">
                            <span>T. Parada Planejada</span>
                            <input type="number" class="inputAzul form-control" value={ParadaPlan}
                                onChange={event => { setParadaPlan(event.target.value); }} />
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 d-flex flex-column align-items-center Div2">
                    <div class="row w-100">
                        <div class="col-12">
                            <span>Cavidades</span>
                            <input type="number" class="inputVerde form-control" value={cavidades}
                                onChange={event => { setCavidades(event.target.value); }} />
                        </div>
                        <div class="col-12">
                            <span>Tempo de Ciclo</span>
                            <input type="number" class="inputVerde form-control" value={ciclo}
                                onChange={event => { setCiclo(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-12">
                            <span>Produção Teórica</span>
                            <input type="number" class="inputVerdeEscuro form-control" disabled value={producaoTeorica.toFixed(2)} />
                        </div>
                        <div class="col-12">
                            <span>Produção Real</span>
                            <input type="number" class="inputVerde form-control" value={prodReal}
                                onChange={event => { setprodReal(event.target.value); }} />
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 d-flex flex-column align-items-end Div3">
                    <div class="row w-100">
                        <div class="col-12">
                            <span>Peso da Peça(g)</span>
                            <input type="number" class="inputVerde form-control" value={peso}
                                onChange={event => { setPeso(event.target.value); }} />
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-12">
                            <span>Rejeito(Kg)</span>
                            <input type="number" class="inputVerde form-control" value={rejeito}
                                onChange={event => { setRejeito(event.target.value); }} />
                        </div>
                    </div>
                </div>

                <div class="container d-flex justify-content-center align-items-center vh-10">
                    <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center DivBotoes">
                        <div class="row w-100">
                            <div class="col-12 text-center">
                                <button type="button" class="btn btn-dark btn-custom" onClick={Calcular}>Calcular</button>
                                <button type="button" class="btn btn-dark btn-custom" onClick={Limpar}>Limpar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container d-flex justify-content-center align-items-center vh-10">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-2 text-center">
                            <span>Disponibilidade</span>
                            <input type="text" class="Resultados form-control" id="disponibilidade" disabled value={Disponibilidade.toFixed(2)+"%"}/>
                        </div>
                        <div class="col-12 col-md-1 text-center">
                            <span class="simbolos">X</span>
                        </div>
                        <div class="col-12 col-md-2 text-center">
                            <span>Performance</span>
                            <input type="text" class="Resultados form-control" id="performance" disabled value={Performance.toFixed(2)+"%"}/>
                        </div>
                        <div class="col-12 col-md-1 text-center ">
                            <span class="simbolos">X</span>
                        </div>
                        <div class="col-12 col-md-2 text-center">
                            <span>Qualidade</span>
                            <input type="text" class="Resultados form-control" id="qualidade" disabled value={Qualidade.toFixed(2)+"%"}/>
                        </div>
                        <div class="col-12 col-md-1 text-center">
                            <span class="simbolos">=</span>
                        </div>
                        <div class="col-12 col-md-2 text-center">
                            <span>OEE</span>
                            <input type="text" class="Resultados form-control" id="oee" disabled value={OEE.toFixed(2)+"%"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default DivMaster