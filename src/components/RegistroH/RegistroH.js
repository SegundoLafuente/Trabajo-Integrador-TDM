import React from "react";
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';


function RegistroH(props){

    const [mail,setMail] = useState('')
    const [contra,setContra] = useState('')
    const [mensajeError,setMensajeError] = useState('')
  

  function evitarSubmit(event) {
    event.preventDefault();
    let usuariosStorage = localStorage.getItem('Usuarios'); // agarro los usuarios del local storage
    let arrayUsuarios = usuariosStorage ? JSON.parse(usuariosStorage) : [];// creo una variable con lo que traje del local storage, si hay algo se cambia de formato y si no hay nada queda un array vacia.
    
    let mail = mail;
    let contra = contra;

    if (!mail || !contra) {//las dos lineas es or// 
        setMensajeError('Todos los campos son obligatorios') // si mail o contra estan vacios se activa esto
        return;
    }

    let filtro = arrayUsuarios.filter(usuario => usuario[0] === mail); // filtro el array con los usuarios de local storage para ver si existe alguno igual al que se acaba de ingresar

    if (filtro.length !== 0 || contra.length < 6) { //si la contra no tiene 6 caracteres o hay algo en filtro(quiere decir que hay un usuario igual al recien ingresado) se pone el mensaje de error
         setMensajeError('El email ya se encuentra registrado o la contraseña es muy corta (mínimo 6 caracteres).')
    } else {
        let nuevoUsuario = [mail, contra];// creo el nuevo usuario
        arrayUsuarios.push(nuevoUsuario); // lo pusheo al array con los demas usuarios
        
        localStorage.setItem('Usuarios', JSON.stringify(arrayUsuarios));// mando el array al local storage
        setMensajeError('') 

        props.history.push('/Login');
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
                      <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
                </form>
    );
  
}

export default withRouter(RegistroH)