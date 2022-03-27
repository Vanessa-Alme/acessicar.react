import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Cards/Card";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Jumbacessicarhome from "../../Components/Jumbotron/Jumbacessicarhome";
import Jumbempresasbtn from "../../Components/Jumbotron/Jumbempresasbtn"



export default function Home () {
    return (
            <>
             <Navbar></Navbar>
        <Carousel/>
        <Jumbacessicarhome></Jumbacessicarhome>
        <Card></Card>
        <Jumbempresasbtn></Jumbempresasbtn>
        <Footer></Footer>
            </>
    )
};