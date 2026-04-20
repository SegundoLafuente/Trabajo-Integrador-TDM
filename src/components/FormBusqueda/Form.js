import './styles.css'
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Card from '../Card/Card';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosIniciales: [],
      datosFiltrados: [],
      valor: ""
    }
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=6aad86ecf8fd94ac9b44f0afc185ea99`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        datosIniciales:data.results,
        datosFiltrados:data.results
      })
    })
  }

  evitarSubmit(event) {
    event.preventDefault(); 
    alert(`Buscando: ${this.state.valor}`);
    this.props.history.push(`/Results/${this.state.valor}`)
  }

  controlarCambios(event) {
    
    this.setState({
      valor: event.target.value
      } , () => this.filtrarCosas(this.state.valor))
  }

  filtrarCosas(textoAFiltrar){
    this.setState({
      datosFiltrados: this.state.datosIniciales.filter((cosa) => cosa.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
    })
  }

  render() {
    return (
      <section className = "personajes-section">
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <label>Buscar: </label>
        
        <input type="text" onChange={(event) => this.controlarCambios(event)} />
        <button type="submit"> Buscar</button>
        
      </form>
      {this.state.datosIniciales.length === 0 ?
      <h3>Cargando...</h3>:
      this.state.datosFiltrados.map((pj, idx) => <Card data = {pj} key= {pj.name+idx}/>)
      }

      </section>
    );
  }
}

export default withRouter(Form);