import React from "react";
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

class LoginHijo extends Component{

  constructor(props) {
    super(props);
    this.state = {mail: '',
      contra: '',
      mensajeError:''
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    let usuariosStorage = localStorage.getItem('Usuarios'); // agarro los usuarios del local storage
    let arrayUsuarios = usuariosStorage ? JSON.parse(usuariosStorage) : [];// creo una variable con lo que traje del local storage, si hay algo se cambia de formato y si no hay nada queda un array vacia.
    
    let mail = this.state.mail;
    let contra = this.state.contra;

    if (!mail || !contra) {//las dos lineas es or
        this.setState({ mensajeError: 'Todos los campos son obligatorios' }); // si mail o contra estan vacios se activa esto
        return;// el return es como estan vacios para que se termine ahi y no haga todo lo que sigue
    }

    let filtro = arrayUsuarios.filter(usuario => usuario[0] === mail); // filtro el array con los usuarios de local storage para ver si existe alguno igual al que se acaba de ingresar

    if ((filtro.length !== 0 && filtro[0][1] === contra)) { // me fijo si filtro tiene algo y si tiene algo se fija si la contra es igual a la recien ingresada
        let user = filtro[0]
        cookies.set('user-auth-cookie', user[0])
        this.setState({ mensajeError: '' });

        this.props.history.push('/');
    } else {
        this.setState({ mensajeError: 'Credenciales incorrectas' });
    }
    

    
  }

  controlarCambiosMail(event) {
    this.setState({mail: event.target.value
    });
  }
    controlarCambiosContra(event) {
    this.setState({
      contra: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingresá tu email" onChange={(event)=>this.controlarCambiosMail(event)} value={this.state.mail}/>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña" onChange={(event)=>this.controlarCambiosContra(event)} value={this.state.contra}/>
                    </div>
                    <p>{this.state.mensajeError}</p>
                    <button type="submit" class="btn btn-primary btn-block">Iniciar sesión</button>
                </form>
    );
  }
}

export default withRouter(LoginHijo)