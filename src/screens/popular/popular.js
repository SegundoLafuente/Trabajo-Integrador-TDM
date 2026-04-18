import React from "react";
import SeccionCard from "../../components/SeccionCard/SeccionCard";
import Titulo from "../../components/Titulo/Titulo";


function popular(props) {
  return (
     
      <>
        <Titulo titulo='Populares:'/>
        <SeccionCard categoria='popular' cantidad='20'/>
      </>
  );
}

export default popular;