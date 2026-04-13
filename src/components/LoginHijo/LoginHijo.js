import React from "react";
import { Component } from 'react';

class LoginHijo extends Component{

  constructor(props) {
    super(props);
    this.state = {valor: ''};
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({valor: event.target.value});
  }

  render() {
    return (
      <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingresá tu email" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
                    </div>
                    <Link to='/Home'><button type="submit" class="btn btn-primary btn-block">Iniciar sesión</button></Link>
                </form>
    );
  }
}

export default LoginHijo;