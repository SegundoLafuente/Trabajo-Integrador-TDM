
import React from "react";
import Titulo from "../../components/Titulo/Titulo";


function Home() {
  return (
     
      <main>
        <Titulo titulo="Popular movies this week" />
        <Titulo titulo="Movies now playing" />
        <Titulo titulo="Popular TV shows this week" />
        <Titulo titulo="Tv shows airing today" />
      </main>
  );
}

export default Home;