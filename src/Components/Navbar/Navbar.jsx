import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
<div class="container-fluid">
  <a class="navbar-brand" href="#">AcessiCAR</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class=" collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto ">
      <li class="nav-item">
      <Link to="/"><a class="nav-link mx-2 active" aria-current="page">Home</a></Link>
      </li>
      <li class="nav-item">
      <Link to="/Sobre"> <a class="nav-link mx-2">Sobre</a></Link>
      </li>
      <li class="nav-item">
      <Link to="/Passageiro"><a class="nav-link mx-2">Passageiro</a></Link>
      </li>
      <li class="nav-item">
      <Link to="/Motorista"> <a class="nav-link mx-2">Motorista</a></Link>
      </li>
      <li class="nav-item">
      <Link to="/Contato"><a class="nav-link mx-2">Contato</a></Link>
      </li>
    </ul>
  </div>
</div>
</nav>
        </>
    )
}

