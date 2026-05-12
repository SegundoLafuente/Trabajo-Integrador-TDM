import React, {useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import './styles.css'

function Card(props){

       const [descripcion,setDescripcion] = useState('mostrar')
       const [clase,setClase] = useState('oculto')
       const [detalle,setDetalle] = useState('Ver más')
       const [favorito,setFavorito] = useState('❤️')
    
    useEffect(
        () => {
            let storage = localStorage.getItem('favorito')
        if (storage !== null){
            let favoritos = JSON.parse(storage)
            let pelicula = props.movie
            let filtro = favoritos.filter(peli => pelicula.id === peli.id)

            if (filtro.length > 0){

                setFavorito('Eliminar favorito')

            }
        }
        }
    )
        
    function verMas(){
        if(descripcion === "mostrar"){
                setDescripcion('ocultar')
                setClase('mostrar')
                setDetalle('Ver menos')

        }
        else{
                setDescripcion('mostrar')
                setClase('oculto')
                setDetalle('Ver más')
        }
    }

    function favoritos(){
        let favoritos = []
        let storage = localStorage.getItem('favorito')

        if(storage !== null){
            favoritos = JSON.parse(storage)
        }

        let pelicula = props.movie

        let filtro = favoritos.filter(peli => pelicula.id === peli.id)

        if(filtro.length === 0){
            favoritos.push(pelicula);
            localStorage.setItem("favorito", JSON.stringify(favoritos));

            setFavorito('Eliminar favorito')

        }
        
    }
    function eliminarfavoritos(){
            if (favorito === 'Eliminar favorito'){
            let favoritos = []
            let storage = localStorage.getItem('favorito')

            if(storage !== null){
                favoritos = JSON.parse(storage)
            }
            let pelicula = props.movie

            let nuevofav = favoritos.filter(peli => pelicula.id !== peli.id)
            localStorage.setItem('favorito', JSON.stringify(nuevofav))

            setFavorito('❤️')
        }
    }
    
        return(
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} className="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{props.movie.title}</h5>
                    <p className={clase}>{props.movie.overview}</p>
                    <button className="btn btn-primary" onClick={()=>verMas()}>{detalle}</button>
                    <Link className="btn btn-primary" to={`/dPelicula/${props.movie.id}`}>Ir a detalle</Link>
                    <button  onClick={favorito === '❤️' ? () => favoritos() : () => eliminarfavoritos()} className="btn alert-primary">{favorito}</button>
                </div>
            </article>
        )
    
}

export default Card;