import React from "react";
import Jumbpassageiro from "../../Components/Jumbotron/Jumbpassageiro";
import Navbar from "../../Components/Navbar/Navbar";
import Formpassageiro from "./Formpassageiro";

export default function Passageiro () {
    return (
        <>
        <Navbar></Navbar>
        <Jumbpassageiro></Jumbpassageiro>
        <Formpassageiro></Formpassageiro>
        </>
    )
}