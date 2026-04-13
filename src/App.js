import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Peliculas from './screens/Peliculas/Peliculas';
import Series from './screens/Series/Series';
import Favoritas from './screens/Favoritas/Favoritas';
import Registro from './screens/Registro/Registro';
import Login from './screens/Login/Login';
import Results from './screens/Results/Results';
import Serie from './screens/Serie/Serie';
function App(){
    return (
      <React.Fragment>
        <h1>UdeSA Movies</h1>
        <Navbar />
        <Switch>
        
          <Route path="/" exact={true} component={Home} />
          <Route path="/dSerie:id" component ={Serie} />
          <Route path="/Peliculas" component={Peliculas} />
          <Route path="/Series" component={Series} />
          <Route path="/Favoritas" component={Favoritas} />

          <Route path="/Registro" component={Registro} />
          <Route path="/Login" component={Login} />

          <Route path="/Results/:valor" component={Results}/>


      </Switch>

      <Footer />
    </React.Fragment>
    )
}

export default App;