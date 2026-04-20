import React from "react";
import Titulo from "../../components/Titulo/Titulo";
import LoginPadre from "../../components/LoginPadre/LoginPadre";
import './styles.css';
import Navbar from "../../components/Navbar/Navbar";



function Login(props) {
  return (
     <>
     <Navbar />
     <main>
        <Titulo titulo="Iniciar sesión" />
        <LoginPadre/>
      </main>
     </>
      
  );
}

export default Login;