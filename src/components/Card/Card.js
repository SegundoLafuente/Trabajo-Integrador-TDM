{/* falta conectar con Home.js*/}


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        const { id, title, poster_path, overview } = this.props.data;
        return (
            <article className="peliculas">
                <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                className="img-card"
                alt={title}
                />
                <div className="body-pelicula">
                    <h5 className="titulo-pelicula">{title}</h5>
                    <p className="texto-pelicula">{overview}</p>
                    <Link to={`/detalle/pelicula/${id}`} className="boton-pelicula">
                        ver mas
                    </Link>
                    {/* falta poner el emoji de corazon en el boton y armar bien el boton*/}
                    <button className="boton-favorito">favorito</button>

                </div>
            </article>
        );
    }
}

export default Card;