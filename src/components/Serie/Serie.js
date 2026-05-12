import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './styles.css'

function Serie(props){

        const [descripcion,setDescripcion] = useState('mostrar')
        const [clase,setClase] = useState('oculto')
        const [detalle,setDetalle] = useState('Ver más')
        const [favorito,setFavorito] = useState('❤️')
    
    useEffect(
        () => {
            let storage = localStorage.getItem('favorito')
        if (storage !== null){
            let favoritos = JSON.parse(storage)
            let pelicula = props.serie
            let filtro = favoritos.filter(peli => pelicula.id === peli.id)

            if (filtro.length > 0){
                
                setFavorito('Eliminar favorito')
                
            }
        }
        }, []
    )
        
    function verMas(){
        if(descripcion === "mostrar"){
                setDescripcion('ocultar')
                setClase('mostrar')
                setDetalle('Ver menos')
        }
        else{
                setDescripcion('mostrar')
                setClase('hide')
                setDetalle('Ver más')
        }
    }

    function favoritos(){
        let favoritos = []
        let storage = localStorage.getItem('favorito')

        if(storage !== null){
            favoritos = JSON.parse(storage)
        }

        let pelicula = props.serie

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
            let pelicula = props.serie

            let nuevofav = favoritos.filter(peli => pelicula.id !== peli.id)
            localStorage.setItem('favorito', JSON.stringify(nuevofav))
         
            setFavorito('❤️')

        }
    }

    
        return(
            <article className='single-card-movie'>
                <img className="card-img-top" src= {`https://image.tmdb.org/t/p/w342/${props.serie.poster_path}`} alt='a'/>
                <h2 className ="card-title">{props.serie.name}</h2>
                <p className={clase}>{props.serie.overview}</p>
                <div className="boton">
                    <button className="btn btn-primary" onClick={()=>verMas()}>{detalle}</button>
                    <Link to={`/Serie/${props.serie.id}`}>Ir a detalle</Link>
                    <button onClick={favorito === '❤️' ? () => favoritos() : () => eliminarfavoritos()} className ="btn alert-primary">{favorito}</button>
                </div>
            </article>
        )
    
}

export default Serie;