import React from "react";
import SeccionCard from "../../components/SeccionCard/SeccionCard";
import Titulo from "../../components/Titulo/Titulo";


function upcoming(props) {
  return (
     
      <>
        <Titulo titulo='Upcoming:'/>
        <SeccionCard categoria='upcoming' cantidad='20'/>
      </>
  );
}

export default upcoming;