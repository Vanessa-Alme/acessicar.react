import React from "react";
import Footer from "../../Components/Footer/Footer";
import Jumbcovid from "../../Components/Jumbotron/Jumbcovid";
import Jumbempresas from "../../Components/Jumbotron/Jumbempresas";
import Jumbmvv from "../../Components/Jumbotron/Jumbmvv";
import Jumbquemsomos from "../../Components/Jumbotron/Jumbquemsomos";
import Navbar from "../../Components/Navbar/Navbar";

export default function Sobre () {
    return (
        <>
        <Navbar></Navbar>
        <Jumbquemsomos></Jumbquemsomos>
        <Jumbmvv></Jumbmvv>
        <Jumbempresas></Jumbempresas>
        <Jumbcovid></Jumbcovid>
        <Footer></Footer>
        </>
    )
}