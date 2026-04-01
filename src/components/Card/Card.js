{/* falta conectar con Home.js*/}


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        const { id, title, poster_path, overview } = this.props.data;
        return (
            <article className="single-card-movie">
                <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                className="card-img-top"
                alt={title}
                />
                <div className="cardBody">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{overview}</p>
                    <Link to={`/detalle/pelicula/${id}`} className="btn btn-primary">
                        ver mas
                    </Link>
                    {/* falta poner el emoji de corazon en el boton y armar bien el boton*/}
                    <button className="btn alert-primary">favorito</button>

                </div>
            </article>
        );
    }
}

export default Card;