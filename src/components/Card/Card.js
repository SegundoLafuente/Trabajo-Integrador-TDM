import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './styles.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            descripcion: "mostrar",
            clase: "oculto",
            detalle: "Ver más",

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
                clase: "oculto",
                detalle: "Ver más"
            })
        }
    }

    render(){
        return(
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} className="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.movie.title}</h5>
                    <p className={this.state.clase}>{this.props.movie.overview}</p>
                    <button className="btn btn-primary" onClick={()=>this.verMas()}>{this.state.detalle}</button>
                    <Link className="btn btn-primary" to={`/dPelicula/${this.props.pelicula.id}`}>Ir a detalle</Link>
                    <button className="btn alert-primary" >❤️</button>
                </div>
            </article>
        )
    }
}

export default Card;