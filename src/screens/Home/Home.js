
import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import './styles.css'
import Form from "../../components/FormBusqueda/Form";
import FormularioBusqueda from "../../components/FormA/FormA";


function Home() {
  return (
     <body>
      <FormularioBusqueda/>
      <main>
        <Titulo titulo="Popular movies this week" />
        <Titulo titulo="Movies now playing" />
        <Titulo titulo="Popular TV shows this week" />
        <Titulo titulo="Tv shows airing today" />
      </main>
      </body>
  );
}

export default Home;