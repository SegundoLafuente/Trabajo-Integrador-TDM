import React from "react";
import SeccionCard from "../../components/SeccionCard/SeccionCard";
import Titulo from "../../components/Titulo/Titulo";
import Navbar from "../../components/Navbar/Navbar";



function popular(props) {
  return (
     
      <>
      <Navbar />
        <Titulo titulo='Populares:'/>
        <SeccionCard categoria='popular' cantidad='20'/>
      </>
  );
}

export default popular;