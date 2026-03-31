import Footer from "./components/Footer/Footer";
import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas";

function App(){
  return(
    <>
      <Navbar/>
    <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/Peliculas" component={Peliculas}/>

    </Switch>

   
    <Footer/>
   </>
  );
}

export default App