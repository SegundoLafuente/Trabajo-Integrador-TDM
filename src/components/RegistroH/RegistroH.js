import React from "react";
import { Component } from 'react';


class RegistroH extends Component{

  constructor(props) {
    super(props);
    this.state = {mail: '',
        contra: '',
        mensajeError: ''
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    let UsuariosStorage = localStorage.getItem('Usuarios');
    let arrayUsuarios = UsuariosStorage ? JSON.parse(UsuariosStorage) : [];
    let filtro = arrayUsuarios!==0 ? this.arrayUsuarios.filter((usuario) => usuario[0]===this.mail & usuario[1]===this.contra) : [];
    
      if ( filtro.length!==0  || this.contra.length<6) {
      this.setState({mensajeError: 'El email ya se encuentra registrado o la contraseña es demasiado corta (mínimo 6 caracteres).'})
    } else {
      this.usuario = [this.mail, this.contra]
      localStorage.setItem('Usuarios', this.usuario)
      this.setState({mensajeError: ''})
    }
    
    
  
  }

  controlarCambiosMail(event) {
    this.setState({
        mail: event.target.value
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
                    <p>`${this.mensajeError}`</p>
                      <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
                </form>
    );
  }
}

export default RegistroH;