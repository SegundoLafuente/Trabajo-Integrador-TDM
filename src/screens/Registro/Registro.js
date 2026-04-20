import React from "react";
import './styles.css'
import RegistroP from "../../components/RegistroP/RegistroP";
import Titulo from "../../components/Titulo/Titulo";
import Navbar from "../../components/Navbar/Navbar";



function Registro(props) {
  return (
     <>
     <Navbar />
     <main>
        <Titulo titulo='Registro'/>
        <RegistroP/>
      </main></>
      
  );
}

export default Registro;