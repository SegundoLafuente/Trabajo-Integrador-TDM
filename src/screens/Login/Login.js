import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import LoginPadre from "../../components/LoginPadre/LoginPadre";
import './styles.css'


function Login(props) {
  return (
     
      <main>
        <Titulo titulo="Iniciar sesión" />
        <LoginPadre/>
      </main>
  );
}

export default Login;