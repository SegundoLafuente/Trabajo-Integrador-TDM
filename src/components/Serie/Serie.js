import React, {Component} from "react";
import { Link } from "react-router-dom";
import './styles.css'

class Serie extends Component{
    constructor(props){
        super(props)
        this.state = {
            descripcion: "mostrar",
            clase: "oculto",
            detalle: "Ver más",
            favorito: "no"
        }
    }

    verMas(){
        if(this.state.descripcion === "mostrar"){
            this.setState({
                descripcion: "ocultar",
                clase: "mostrar",
                detalle: "Ver menos"
            })
        }
        else{
            this.setState({
                descripcion: "mostrar",
                clase: "hide",
                detalle: "Ver más"
            })
        }
    }

    favoritos(){
        let favoritos = []
        let storage = localStorage.getItem('favorito')

        if(storage !== null){
            favoritos = JSON.parse(storage)
        }

        let pelicula = this.props.serie

        let filtro = favoritos.filter(peli => pelicula.id === peli.id)

        if(filtro.length === 0){
            favoritos.push(pelicula);
            localStorage.setItem("favorito", JSON.stringify(favoritos));
            
        }
    }

    render(){
        return(
            <article className='single-card-movie'>
                <img className="card-img-top" src= {`https://image.tmdb.org/t/p/w342/${this.props.serie.poster_path}`}/>
                <h2 className ="card-title">{this.props.serie.name}</h2>
                <p className={this.state.clase}>{this.props.serie.overview}</p>
                <div className="boton">
                    <button className="btn btn-primary" onClick={()=>this.verMas()}>{this.state.detalle}</button>
                    <Link to={`/Serie/${this.props.serie.id}`}>Ir a detalle</Link>
                    <button onClick={()=>this.favoritos()} className ="btn alert-primary">Favoritos</button>
                </div>
            </article>
        )
    }
}

export default Serie;