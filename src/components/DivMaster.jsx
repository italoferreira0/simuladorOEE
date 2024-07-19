import { Alert, Button } from 'bootstrap'
import '../style/DivMaster.css'
import { useState } from 'react'


function DivMaster() {
    const [ Htrabalhada, setHtrabalhada] = useState('')//Conectando input com variavel.
    const [ParadaPlan, setParadaPlan] = useState('')
    const [cavidades, setCavidades] = useState('')
    const [ciclo, setCiclo] = useState('')

    //Variaveis
    let dia = 24
    const HtrabalhadaFloat = parseFloat(Htrabalhada)//Atribuindo tipo a variavel.
    const ParadaPlanFloat = parseFloat(ParadaPlan)
    const cavidadesFloat = parseFloat(cavidades)
    const cicloFloat = parseFloat(ciclo)

    function ProdTeorica(HtrabalhadaFloat,cavidadesFloat,cicloFloat) {
        return (3600 / cicloFloat) * cavidadesFloat * HtrabalhadaFloat;
    }

    function Calcular() {
        console.log('Hora Trabalhada',HtrabalhadaFloat)
        console.log('Parada Planejada',ParadaPlanFloat)
        console.log('Cavidades ',cavidadesFloat)
        console.log('Ciclo ',cicloFloat)
        const producaoTeorica = ProdTeorica(HtrabalhadaFloat, cavidadesFloat, cicloFloat);
        console.log('Produção terorica: ',producaoTeorica)
    }
    

    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 d-flex justify-content-start Div1">

                        <div className="row">
                            <span>Horas Planejadas</span>
                            <input type="number" id="" className='inputVerdeEscuro'disabled value={dia} />

                            <span>Horas Trabalhadas</span>
                            <input type="number" className="inputVerde" value={Htrabalhada}
                             onChange={event => {setHtrabalhada(event.target.value);}}/>

                        </div>
                        
                        <div className="row">
                            <span>T. Parada não Planejada</span>
                            <input type="number" className='inputAzul' disabled  />

                            <span>T. Parada Planejada</span>
                            <input type="number" className='inputAzul' value={ParadaPlan}
                             onChange={event => {setParadaPlan(event.target.value);}}/>
                        </div>

                    </div>

                    <div class="col-12 col-md-4 d-flex justify-content-center Div2">
                    <div className="row">
                            <span>Cavidades</span>
                            <input type="number" className='inputVerde'value={cavidades}
                             onChange={event => {setCavidades(event.target.value);}}/>

                            <span>Produção Real</span>
                            <input type="number" className="inputVerde"/>

                        </div>
                        
                        <div className="row">
                            <span>Tempo de Ciclo</span>
                            <input type="number" className='inputVerde' value={ciclo}
                             onChange={event => {setCiclo(event.target.value);}}/>

                            <span>Produção Teórica</span>
                            <input type="number" className='inputVerdeEscuro' disabled/>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 d-flex justify-content-end Div3">
                        <div className="row">
                            <span>Pesoa da Peça(g)</span>
                            <input type="number" className='inputVerde'/>
                        </div>
                        <div className="row">
                            <span>Rejeito(Kg)</span>
                            <input type="number" className='inputVerde'/>
                        </div>
                    </div>
                    
                    <div class="container d-flex justify-content-center align-items-center vh-10 ">
                        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center DivBotoes">
                        <div class="row w-100">
                            <div class="col-12 text-center">
                            <button type="button" class="btn btn-dark btn-custom" onClick={Calcular}>Calcular</button>
                            <button type="button" class="btn btn-dark btn-custom">Limpar</button>
                        </div>
                        </div>
                        </div>
                    </div>

                </div>
                <div class="container d-flex justify-content-center align-items-center vh-10">
                <div class="col-12 col-md-8 d-flex justify-content-center align-items-center">
                <div class="d-flex align-items-center">
                    <div class="text-center">
                        <span>Disponibilidade</span>
                        <input type="number" class="Resultados" disabled/>
                    </div>
                    <span class="simbolos">X</span>
                    <div class="text-center">
                        <span>Performance</span>
                        <input type="number" class="Resultados" disabled/>
                    </div>
                    <span class="simbolos">X</span>
                    <div class="text-center">
                        <span>Qualidade</span>
                        <input type="number" class="Resultados" disabled/>
                    </div>
                    <span class="simbolos">=</span>
                    <div class="text-center">
                        <span>OEE</span>
                        <input type="number" class="Resultados" disabled/>
                    </div>
                </div>
                </div>
  </div>
                
            </div>
        </div>
    )
}

export default DivMaster