import React, {Component} from "react";
import { Link } from "react-router-dom";


class Pelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            descripcion: "mostrar",
            clase: "hide",
            detalle: "Ver más",
        }
    }

    verDescripcion(){
        if(this.state.descripcion === "mostrar"){
            this.setState({
                descripcion: "no mostrar",
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

    render(){
        return(
            <article className='popular'>
                <img src= {`https://image.tmdb.org/t/p/w342/${this.props.pelicula.poster_path}`}/>
                <h2>{this.props.pelicula.title}</h2>
                <p className={this.state.clase}>{this.props.pelicula.overview}</p>
                <div className="botones-home">
                    <button onClick={()=>this.verDescripcion()}>{this.state.detalle}</button>
                    <Link to={`/dPelicula/${this.props.pelicula.id}`}>Ir a detalle</Link>
                    <button>Favoritos</button>
                </div>
            </article>
        )
    }
}

export default Pelicula