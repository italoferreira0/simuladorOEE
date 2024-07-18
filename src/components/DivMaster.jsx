import { Button } from 'bootstrap'
import '../style/DivMaster.css'


function DivMaster() {
    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 d-flex justify-content-start Div1">

                        <div className="row">
                            <span>Horas Planejadas</span>
                            <input type="number" className='inputVerdeEscuro'disabled/>

                            <span>Horas Trabalhadas</span>
                            <input type="number" className="inputVerde"/>

                        </div>
                        
                        <div className="row">
                            <span>T. Parada não Planejada</span>
                            <input type="number" className='inputAzul'/>

                            <span>T. Parada Planejada</span>
                            <input type="number" className='inputAzul'/>
                        </div>

                    </div>

                    <div class="col-12 col-md-4 d-flex justify-content-center Div2">
                    <div className="row">
                            <span>Cavidades</span>
                            <input type="number" className='inputVerde'/>

                            <span>Produção Real</span>
                            <input type="number" className="inputVerde"/>

                        </div>
                        
                        <div className="row">
                            <span>Tempo de Ciclo</span>
                            <input type="number" className='inputVerde'/>

                            <span>Produção Teórica</span>
                            <input type="number" className='inputVerdeEscuro' disabled/>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 d-flex justify-content-end Div3">
                        <div className="row">
                            <span>Horas Planejadas</span>
                            <input type="number" className='inputVerdeEscuro'/>
                        </div>
                        <div className="row">
                            <span>Horas Planejadas</span>
                            <input type="number" className='inputVerdeEscuro'/>
                        </div>
                    </div>
                    
                    <div class="container d-flex justify-content-center align-items-center vh-10 ">
                        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center DivBotoes">
                        <div class="row w-100">
                            <div class="col-12 text-center">
                            <button type="button" class="btn btn-dark btn-custom">Calcular</button>
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