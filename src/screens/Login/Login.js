import React from "react";
import LoginC from "../../components/LoginHijo/LoginHijo";
import Titulo from "../../components/Titulo/Titulo";
import './styles.css'


function Login(props) {
  return (
     
      <main>
        <Titulo titulo="Iniciar sesión" />
        <LoginC />
      </main>
  );
}

export default Login;