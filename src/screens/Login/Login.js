import React from "react";
import LoginC from "../../components/LoginHijo/LoginHijo";
import Titulo from "../../components/Titulo/Titulo";

function Login(props) {
  return (
     
      <main>
        <Titulo titulo="Iniciar sesión" />
        <LoginC />
      </main>
  );
}

export default Login;