import React from "react"
import Icone1 from "../../Assets/Img/icone1.jpg"
import Icone2 from "../../Assets/Img/20945597.jpg"
import Icone3 from "../../Assets/Img/icone3.jpg"
import Icone4 from "../../Assets/Img/icone4.jpg"
import Icone5 from "../../Assets/Img/icone5.jpg"
import Icone6 from "../../Assets/Img/icone6.png"

export default function Card() {
    return (
        <> 
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-5 textformat1">Por que viajar com a AcessiCAR?</h1>
                    <p className="lead">Vejo os motivos de solicitar nossos serviços.</p>


                    <div className="container-fluid">

                        <div className="card-deck">
                            <div className="card">
                                <img src={Icone1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Transporte Adaptado</h5>
                                    <p className="card-text">
                                        Veículos adaptatos com rampas de acesso ou elevador pode ser acionado por controle
                                        interno ou remoto,
                                        cinto de segurança adaptado dispositivo de travamento que impede
                                        a movimentação da cadeira enquanto o passageiro está em sua viagem,
                                        colete peitoral que auxilia no transporte e tomada dedicada à aparelhos respiratórios e eletrônicos.
                                        dispositivo de travamento que impede

                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={Icone2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Segurança</h5>
                                    <p className="card-text">
                                        Os veículos possuem sistema de frenagem ABS e Airbags para passageiro e motorista.
                                        Nossos motoristas parceiros passam por uma triagem incluindo checagem de histórico e antecedentes
                                        criminais,
                                        um treinamento para operação dos aparatos tecnológicos do veículo, além de serem avaliados
                                        periodicamente.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={Icone3} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Custo-benefício</h5>
                                    <p className="card-text">
                                        Serviço personalizado de acordo com as suas necessidade
                                        por um preço acessível. O usuário que adquirir pacote com 3 ou mais viagens,
                                        poderá parcelar o pagamento em até 3x sem juros.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="container-fluid">
                        <div className="card-deck">
                            <div className="card">
                                <img src={Icone4} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Protocolos COVID-19</h5>
                                    <p className="card-text">
                                        Todos os Protocolos COVID-19 são seguidos pela AcessiCAR. Os veículos são
                                        higienizados periodicamente,
                                        os motoristas parceiros utilizam máscara de proteção e, no veículo, frascos de álcool em gel ficam a
                                        diposição.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={Icone5} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Atendimento 24 horas</h5>
                                    <p className="card-text">
                                        Nossa central de Atendimento está diposnível 24 horas por dia.
                                        Em caso de solicitação, dúvidas, sugestões ou qualquer outra informação, não hesite em nos contactar.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={Icone6} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Agendamento para viagens especiais</h5>
                                    <p className="card-text">
                                        A AcessiCAR oferece o serviço de agendamento para viagens especiais.
                                        Você pode agendar a sua visita ao médico, aeroporto, rodoviária e muito mais.
                                        Com o agendamento especial, nós iremos oferecer o veículo mais adequado para a ocasião.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>

                </div>
            </div>
        </div>

        </>
    )
}