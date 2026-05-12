import React from "react";
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

function LoginHijo(props){

      const [mail,setMail] = useState('')
      const [contra,setContra] = useState('')
      const [mensajeError,setMensajeError] = useState('')

  function evitarSubmit(event) {
    event.preventDefault();
    let usuariosStorage = localStorage.getItem('Usuarios'); // agarro los usuarios del local storage
    let arrayUsuarios = usuariosStorage ? JSON.parse(usuariosStorage) : [];// creo una variable con lo que traje del local storage, si hay algo se cambia de formato y si no hay nada queda un array vacia.
    
    let mail = mail;
    let contra = contra;

    if (!mail || !contra) {//las dos lineas es or
        setMensajeError('Todos los campos son obligatorios') // si mail o contra estan vacios se activa esto
        return;// el return es como estan vacios para que se termine ahi y no haga todo lo que sigue
    }

    let filtro = arrayUsuarios.filter(usuario => usuario[0] === mail); // filtro el array con los usuarios de local storage para ver si existe alguno igual al que se acaba de ingresar

    if ((filtro.length !== 0 && filtro[0][1] === contra)) { // me fijo si filtro tiene algo y si tiene algo se fija si la contra es igual a la recien ingresada
        let user = filtro[0]
        cookies.set('user-auth-cookie', user[0])
        setMensajeError('') 

        props.history.push('/');
    } else {
        setMensajeError('Credenciales incorrectas') 
    }
      
  }


  function controlarCambiosMail(event) {
    setMail(event.target.value)
    
  }
  function controlarCambiosContra(event) {
    
    setContra(event.target.value)
    
  }

    return (
      <form onSubmit={(event)=>evitarSubmit(event)}>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingresá tu email" onChange={(event)=>controlarCambiosMail(event)} value={mail}/>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña" onChange={(event)=>controlarCambiosContra(event)} value={contra}/>
                    </div>
                    <p>{mensajeError}</p>
                    <button type="submit" class="btn btn-primary btn-block">Iniciar sesión</button>
                </form>
    );
  
}

export default withRouter(LoginHijo)