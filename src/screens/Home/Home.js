
import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import './styles.css'
import FormularioBusqueda from "../../components/FormA/FormA";
import SeccionCard from "../../components/SeccionCard/SeccionCard";


function Home() {
  return (
     <><FormularioBusqueda/>
      <main>
        <Titulo titulo="Popular movies this week" />
        <SeccionCard categoria='popular' cantidad='4'/>
        <Titulo titulo="Upcoming" />
        <SeccionCard categoria='upcoming' cantidad='4'/>
      </main>
      </> 
  );
}

export default Home;