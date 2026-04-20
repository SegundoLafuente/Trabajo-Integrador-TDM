import { Component } from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";

class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      datos: [],
      cargando: true
    }

  }
buscarPeliculas(busqueda) {
    this.setState({ cargando: true })

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6aad86ecf8fd94ac9b44f0afc185ea99&query=${this.props.match.params.busqueda}`)
  .then(response => response.json())
  .then(data => this.setState({
    datos:data.results,
    cargando:false
  }))
  .catch(error => console.log(error))
}
componentDidMount() {
    this.buscarPeliculas(this.props.match.params.busqueda);
  }

  componentDidUpdate(update) {
    if (update.match.params.busqueda !== this.props.match.params.busqueda) {
      this.buscarPeliculas(this.props.match.params.busqueda);
    }
  }

  render(){
    return (
      <><Navbar />
      <h1>Resultados de Busqueda:</h1>
      <section class="row cards" id="movies">
      {this.state.cargando ? (
            <h3>Cargando...</h3>
          ) : this.state.datos.length === 0 ? (
            <h3>No se encontraron resultados.</h3>
          ) : (
            this.state.datos.map((pj) => <Card key={pj.id} movie={pj} />)
          )}
      </section></>
    );
  }
}

export default Results;