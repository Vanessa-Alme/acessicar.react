import React from "react";


export default function Formpassageiro() {
    return (
        <>
            <div >
                <div class="container color mt-5 rounded shadow">
                    <div class="row align-items-stretch">
                        <div class="col d-none d-lg-block rounded bg-white imag-clie">
                            <img src="https://img.freepik.com/vetores-gratis/feliz-mae-e-pai-com-filha-em-cadeira-de-rodas-homem-e-mulher-com-ilustracao-em-vetor-plana-garota-com-deficiencia-familia-conceito-de-deficiencia-para-banner-design-de-site-ou-pagina-de-destino_179970-6388.jpg?size=626&ext=jpg" alt="some text" />
                        </div>

                        <div class="col rounded-end">
                            <h4 class="fw-bold text-center py-5 text-color">Faça seu Cadastro aqui!</h4>
                            <form >
                                <div class="form-group text-color">
                                    <label htmlFor="nome" class="control-label"> Nome: </label>
                                    <input type="" class="form-control" />
                                    <span class="text-danger"></span>
                                </div>
                                <div class="form-group mb-4 text-color">
                                    <label htmlFor="email" class="control-label"> Email:  </label>
                                    <input type="" class="form-control" />
                                    <span class="text-danger"></span>
                                </div>
                                <div class="form-group mb-4 text-color">
                                    <label htmlFor="telefone" class="control-label"> Telefone:  </label>
                                    <input type="" class="form-control" />
                                    <span class="text-danger"></span>
                                </div>
                                <div class="form-group mb-4 text-color">
                                    <label htmlFor="endereco" class="control-label"> Endereco:  </label>
                                    <input type="" class="form-control" />
                                    <span class="text-danger"></span>
                                </div>
                                <div class="form-group mb-4 text-color">
                                    <label htmlFor="cpf" class="control-label">CPF</label>
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