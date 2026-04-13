import React, {Component} from "react";
import { Link } from "react-router-dom";

class PopularSerie extends Component{
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
            <article className='series'>
                <img src= {`https://image.tmdb.org/t/p/w342/${this.props.serie.poster_path}`}/>
                <h2>{this.props.serie.name}</h2>
                <p className={this.state.clase}>{this.props.serie.overview}</p>
                <div className="boton">
                    <button onClick={()=>this.verMas()}>{this.state.detalle}</button>
                    <Link to={`/dSerie/${this.props.serie.id}`}>Ir a detalle</Link>
                    <button>Favoritos</button>
                </div>
            </article>
        )
    }
}

export default PopularSerie;