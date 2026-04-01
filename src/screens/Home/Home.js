{/* falta conectar con Card.js cambiar el Home.js, Armar la Key y conectarla*/}

import React from "react";
import Titulo from "../../components/Titulo/Titulo";


function Home() {
  return (
     
      <main>
        <Titulo titulo="Popular movies this week" />
        <p>Proyecto epico anashe</p>
        <Titulo titulo="Movies now playing" />
        <Titulo titulo="Popular TV shows this week" />
        <Titulo titulo="Tv shows airing today" />
      </main>
  );
}

export default Home;