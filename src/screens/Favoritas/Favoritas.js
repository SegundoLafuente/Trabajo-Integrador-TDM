import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import SeccionFavoritas from "../../components/SeccionFavoritas/SeccionFavoritas";
import Navbar from "../../components/Navbar/Navbar";


function Favoritas(props) {
  return (
     <>
     <Navbar />
     <Titulo titulo = "Favoritas:"/>
     <SeccionFavoritas/>
     </>
  )
}

export default Favoritas;