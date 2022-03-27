import React from "react"
export default function Menufooter () {
    return (
    <>    
        <div className="card text-white bg-dark mb-3 border-0 mx-auto">

<div className="card-body menu2">
    <h5 className="card-title">Navegação</h5>
    <ul>
        <li><a asp-action="Index">Home</a></li>
        <li><a asp-action="Sobre">Sobre</a></li>
        <li><a asp-action="Passageiro">Passageiro</a></li>
        <li><a asp-action="Motorista">Motorista</a></li>

    </ul>
</div>
</div>
    </>
    )
}



