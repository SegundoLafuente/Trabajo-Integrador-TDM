import './styles.css'
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { valor: '' }; 
  }

  evitarSubmit(event) {
    event.preventDefault(); 
    alert(`Buscando: ${this.state.valor}`);
    this.props.history.push(`/Results/${this.state.valor}`)
  }

  controlarCambios(event) {
    
    this.setState(
      { valor: event.target.value }, () => console.log(this.state.valor) 
    );
  }

  render() {
    return (
      
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <label>Buscar: </label>
        
        <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
        <button type="submit"> Buscar</button>
      </form>
    );
  }
}

export default withRouter(Form);