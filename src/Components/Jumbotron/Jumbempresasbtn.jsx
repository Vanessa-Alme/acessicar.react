import React from "react"
import "../Jumbotron/jumb.css"

export default function Jumbempresas() {
    return (
    <>    
            <div className="jumbotron jumbotron-with-background5 text-light bg-secondary">
        <h1 className="display-4">Mobilidade para Empresas</h1>
        <p class="lead">Seja um parceiro AcessiCAR!</p>
        <a className="btn btn-primary btn-lg" asp-action="Sobre" role="button">Saiba Mais</a>

        </div>
    </>
    )
}