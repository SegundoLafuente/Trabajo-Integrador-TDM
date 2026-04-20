import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";


class SeccionFavoritas extends Component{
    constructor(){
        super()
        this.state = {
            favoritas: [],
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favorito');

        if (storage !== null){
            let cambio = JSON.parse(storage)
            this.setState({
                favoritas: cambio
            });
        }
    }
    render(){
        return(
            <>
                <section className="row cards" id="movies">
                    {this.state.favoritas === [] ? <h1>Cargando...</h1>: this.state.favoritas.map((pelicula, idx) => <Pelicula key = {(pelicula + idx)} pelicula={pelicula}/>)}
                    <button className = "btn btn-primary" onClick={()=>this.cargarMas()}>Cargar más</button>
                </section>
            </>
        )
    }
}


export default SeccionFavoritas;