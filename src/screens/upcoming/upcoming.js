import React from "react";
import SeccionCard from "../../components/SeccionCard/SeccionCard";
import Titulo from "../../components/Titulo/Titulo";
import Navbar from "../../components/Navbar/Navbar";



function upcoming(props) {
  return (
     
      <>
      <Navbar />
        <Titulo titulo='Upcoming:'/>
        <SeccionCard categoria='upcoming' cantidad='20'/>
      </>
  );
}

export default upcoming;