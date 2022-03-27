import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Form from "./Form";
import Btn from "./Btn";
import "../Motorista/Motorista.css";
import Jumbmotorista from "../../Components/Jumbotron/Jumbmotorista";

export default function Motorista () {
    return (
        <>
        <Navbar></Navbar>
        <Jumbmotorista></Jumbmotorista>
        <Form></Form>
        <Btn></Btn>
        </>
    )
}