import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import SeccionFavoritas from "../../components/SeccionFavoritas/SeccionFavoritas";

function Favoritas(props) {
  return (
     <>
     <Titulo titulo = "Favoritas:"/>
     <SeccionFavoritas/>
     </>
  )
}

export default Favoritas;