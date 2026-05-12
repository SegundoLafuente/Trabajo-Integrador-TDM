import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";


function Pelicula(props){
    
        const [descripcion,setDescripcion] = useState('mostrar')
        const [clase,setClase] = useState('hide')
        const [detalle,setDetalle] = useState('Ver más')
        const [favorito,setFavorito] = useState('❤️')
        
    
    useEffect(
        () => {
            let storage = localStorage.getItem('favorito')
        if (storage !== null){
            let favoritos = JSON.parse(storage)
            let pelicula = props.pelicula
            let filtro = favoritos.filter(peli => pelicula.id === peli.id)

            if (filtro.length > 0){

                setFavorito('Eliminar favorito')
            }
        }
        },[]
    )
    
    function verDescripcion(){
        if(descripcion === "mostrar"){
            setDescripcion('no mostrar')
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

        let pelicula = props.pelicula

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
            let pelicula = props.pelicula

            let nuevofav = favoritos.filter(peli => pelicula.id !== peli.id)
            localStorage.setItem('favorito', JSON.stringify(nuevofav))
           
            setFavorito('❤️')
        }
    }
    
        return(
            <article className='single-card-movie'>
                <img className="card-img-top" src= {`https://image.tmdb.org/t/p/w342/${props.pelicula.poster_path}`} alt='a'/>
                <h2 className ="card-title">{props.pelicula.title}</h2>
                <p className={clase}>{props.pelicula.overview}</p>
                <div className="boton">
                    <button className="btn btn-primary" onClick={()=>verDescripcion()}>{detalle}</button>
                    <Link to={`/dPelicula/${props.pelicula.id}`}>Ir a detalle</Link>
                    <button onClick={favorito === '❤️' ? () => favoritos() : () => eliminarfavoritos()} className ="btn alert-primary">{favorito}</button>
                </div>
            </article>
        )

    }
    
    


export default Pelicula