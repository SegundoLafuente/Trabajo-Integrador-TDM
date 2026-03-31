import Footer from "./components/Footer/Footer";
import React from 'react'
import Navbar from "./components/Navbar/Navbar";

function App(){
  return(
    <React.Fragment>
      <Navbar/>
    <p>Proyecto epico anashe</p>

   <footer>
    <Footer/>
   </footer>
   </React.Fragment>
  );
}

export default App