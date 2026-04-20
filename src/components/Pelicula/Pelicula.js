import React, {Component} from "react";
import { Link } from "react-router-dom";


class Pelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            descripcion: "mostrar",
            clase: "hide",
            detalle: "Ver más",
            favorito: "❤️"
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favorito')
        if (storage !== null){
            let favoritos = JSON.parse(storage)
            let pelicula = this.props.pelicula
            let filtro = favoritos.filter(peli => pelicula.id === peli.id)

            if (filtro.length > 0){
                this.setState({
                    favorito: 'Eliminar favorito'
                })
            }
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

    favoritos(){
        let favoritos = []
        let storage = localStorage.getItem('favorito')

        if(storage !== null){
            favoritos = JSON.parse(storage)
        }

        let pelicula = this.props.pelicula

        let filtro = favoritos.filter(peli => pelicula.id === peli.id)

        if(filtro.length === 0){
            favoritos.push(pelicula);
            localStorage.setItem("favorito", JSON.stringify(favoritos));
            this.setState({
                    favorito: 'Eliminar favorito'
                })
        }
    }
    eliminarfavoritos(){
            if (this.state.favorito === 'Eliminar favorito'){
            let favoritos = []
            let storage = localStorage.getItem('favorito')

            if(storage !== null){
                favoritos = JSON.parse(storage)
            }
            let pelicula = this.props.pelicula

            let nuevofav = favoritos.filter(peli => pelicula.id !== peli.id)
            localStorage.setItem('favorito', JSON.stringify(nuevofav))
            this.setState({
                favorito: '❤️'
            })
        }
    }
    render(){
        return(
            <article className='single-card-movie'>
                <img className="card-img-top" src= {`https://image.tmdb.org/t/p/w342/${this.props.pelicula.poster_path}`}/>
                <h2 className ="card-title">{this.props.pelicula.title}</h2>
                <p className={this.state.clase}>{this.props.pelicula.overview}</p>
                <div className="boton">
                    <button className="btn btn-primary" onClick={()=>this.verDescripcion()}>{this.state.detalle}</button>
                    <Link to={`/dPelicula/${this.props.pelicula.id}`}>Ir a detalle</Link>
                    <button onClick={this.state.favorito === '❤️' ? () => this.favoritos() : () => this.eliminarfavoritos()} className ="btn alert-primary">{this.state.favorito}</button>
                </div>
            </article>
        )
    }
}

export default Pelicula