import React from "react";
import Navbar from "../../Components/Navbar/Navbar";


export default function Formcontato() {
    return (
        <>
            <div >
                <div class="container color mt-5 rounded shadow">
                    <div class="row align-items-stretch">
                        <div class="col d-none d-lg-block rounded bg-white">
                            <img src="https://appassets.mvtdev.com/map/131/s/322/53505684.jpg" alt="Endereço do AcessiCar" />
                        </div>

                        <div class="col rounded-end">
                            <h4 class="fw-bold text-center py-5 text-color">Entre em contato conosco!</h4>
                            <form asp-action="Create">
                                <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                                <div class="form-group text-color">
                                    <label htmlFor="nome" class="control-label"> Nome: </label>
                                    <input type="" class="form-control" />
                                    <span class="text-danger"></span>
                                </div>
                                <div class="form-group text-color">
                                    <label htmlFor="email" class="control-label"> Email: </label>
                                    <input type="" class="form-control" />
                                    <span class="text-danger"></span>
                                </div>
                                <div class="form-group text-color">
                                    <label htmlFor="mensagem" class="control-label"> Mensagem: </label>
                                    <input type="" class="form-control" />
                                    <span class="text-danger"></span>
                                </div>
                                <div class="container w-100 my-5">
                                    <div class="row">
                                        <div class="col">
                                            <input type="submit" value="Cadastrar" class="btn btn-outline-primary w-100 my-1" />
                                        </div>
                                        <div class="col">
                                            <a class="btn btn-outline-danger w-100 my-1">Voltar</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <p><center>
                    <a class="btn btn-outline-primary w-30 my-1">Consultar Contatos</a>
                </center>
                </p>
            </div>

        </>
    )
}