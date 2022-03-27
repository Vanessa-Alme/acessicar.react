import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contato from './Pages/Contato/Contato';
import Home from './Pages/Home/Home';
import Motorista from './Pages/Motorista/Motorista';
import Passageiro from './Pages/Passageiro/Passageiro';
import Sobre from './Pages/Sobre/Sobre';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"



ReactDOM.render(
  <React.StrictMode>
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
        <Route path="/passageiro" element={<Passageiro/>}></Route>
        <Route path="/motorista" element={<Motorista/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
      </Routes>
    </Router>
    </>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

