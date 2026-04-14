import { Component } from "react";
import Card from "../../components/Card/Card";


class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      datos: []
    }

  }

componentDidMount(){
  fetch(`https://api.themoviedb.org/3/search/movie?=${this.props.match.params.busqueda}`)
  .then(response => response.json())
  .then(data => this.setState({
    datos:data.results
  }))
  .catch(error => console.log(error))
}

  render(){
    return (
      <section>
      <h1>Resultados</h1>
      {this.state.datos.length === 0 ? 
        <h3>Cargando...</h3> : 
        this.state.datos.map((pj,idx) => <Card key ={pj.name+idx} data = {pj}/>)
      }
      </section>
    );
  }
}

export default Results;