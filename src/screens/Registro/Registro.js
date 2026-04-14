import React from "react";
import './styles.css'
import RegistroP from "../../components/RegistroP/RegistroP";
import Titulo from "../../components/Titulo/Titulo";


function Registro(props) {
  return (
     
      <main>
        <Titulo titulo='Registro'/>
        <RegistroP/>
      </main>
  );
}

export default Registro;