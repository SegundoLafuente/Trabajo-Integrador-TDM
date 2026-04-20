import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";


class PeliculasSection extends Component{
    constructor(){
        super()
        this.state = {
            peliculas: [],
            Pag: 1
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=6aad86ecf8fd94ac9b44f0afc185ea99")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
                peliculas: data.results,
                Pag: data.page + 1
            })
        })
        .then(console.log(this.state.Pag))
        .catch(error => console.log(error));
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1a700a291cf896745821e2c04ca0ecaa&page=${this.state.Pag}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                Pag: data.page + 1
            })
        })
        .then(console.log(this.state.peliculas))
        .catch((error)=>console.log(error))

    }

    render(){
        return(
            <>
                <section className = "cards">
                    {this.state.peliculas == [] ? <h1>Cargando...</h1>: this.state.peliculas.map((pelicula, idx) => <Pelicula key = {(pelicula + idx)} pelicula={pelicula}/>)}
                    <button className = "boton-cargar.mas" onClick={()=>this.cargarMas()}>Cargar más</button>
                </section>
            </>
        )
    }
}


export default PeliculasSection