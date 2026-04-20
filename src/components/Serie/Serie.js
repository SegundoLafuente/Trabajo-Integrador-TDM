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
        }
    }

    verMas(){
        if(this.state.descripcion == "mostrar"){
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

    render(){
        return(
            <article className='single-card-movie'>
                <img className="card-img-top" src= {`https://image.tmdb.org/t/p/w342/${this.props.serie.poster_path}`}/>
                <h2 className ="card-title">{this.props.serie.name}</h2>
                <p className={this.state.clase}>{this.props.serie.overview}</p>
                <div className="boton">
                    <button className="btn btn-primary" onClick={()=>this.verMas()}>{this.state.detalle}</button>
                    <Link to={`/Serie/${this.props.serie.id}`}>Ir a detalle</Link>
                    <button className ="btn alert-primary">Favoritos</button>
                </div>
            </article>
        )
    }
}

export default Serie;