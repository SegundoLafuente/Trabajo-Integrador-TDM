
import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import './styles.css'
import FormularioBusqueda from "../../components/FormA/FormA";
import SeccionCard from "../../components/SeccionCard/SeccionCard";
import Navbar from "../../components/Navbar/Navbar";



function Home() {
  return (
    <>
    <Navbar />
    <body>
      
      <FormularioBusqueda/>
      <main>
        <Titulo titulo="Popular movies this week" />
        <SeccionCard categoria='popular' cantidad='4'/>
        <Titulo titulo="Upcoming" />
        <SeccionCard categoria='upcoming' cantidad='4'/>
      </main>
      </body></>
     
  );
}

export default Home;