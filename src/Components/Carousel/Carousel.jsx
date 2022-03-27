import React from "react";
import Carrosselfeliz1 from "../../Assets/Img/carrosselfeliz1.jpg"
import Carrosselbeijodog from "../../Assets/Img/carrosselbeijodog.jpg"
import Carrosselparceiro from "../../Assets/Img/carrosselparceiro.jpg"
import Carrosselcorona from "../../Assets/Img/carrosselcorona.jpg"




export default function Carousel() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data- ride="carousel">
                <div className="container-fluid">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Carrosselfeliz1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1 className="carouseltext">Solicite uma Viagem</h1>
                                    <p>Conheça nossos serviços.</p>

                                </div>

                            </div>
                            <div className="carousel-item">
                                <img src={Carrosselbeijodog} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1 className="carouseltext">Especialista em transporte acessível</h1>
                                    <p>Economize tempo no transporte e aproveita mais as coisas boas da vida. </p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src={Carrosselparceiro} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1 className="carouseltext">Seja Parceiro</h1>
                                    <p>Dirija com as melhores condições.</p>
                                    <a className="btn btn-success btn-lg" asp-area="" asp-controller="Motorista" asp-action="Create">Cadastre-se</a>


                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src={Carrosselcorona} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>Protocolos COVID-19</h1>
                                    <p>Segurança em primeiro lugar</p>
                                    <ul>
                                        <li>
                                            <a className="btn btn-primary btn-lg" asp-area="" asp-controller="Home" asp-action="Sobre">Saiba Mais</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators"
                                data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators"
                                data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}