import React from "react";
import { Link } from 'react-router-dom';
import './styles.css'

function Navbar(){
    return(
        <nav>
    <ul class="nav nav-tabs my-4">
                <li class="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/Peliculas">Peliculas</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/Series">Series</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/Favoritas">Favoritas</Link>
                </li>
                <li class="nav-item ml-auto">
                    <Link className="nav-link" to="/Registro">Registro</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/Login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;