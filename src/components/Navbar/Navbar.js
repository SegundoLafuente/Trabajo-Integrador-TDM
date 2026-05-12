import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './styles.css';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

function Navbar(props){
     
        return(
        <nav>
    <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Peliculas">Peliculas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Series">Series</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Favoritas">Favoritas</Link>
                </li>
                <li className="nav-item ml-auto">
                    <Link className="nav-link" to="/Registro">Registro</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Login">Login</Link>
                </li>
                
            </ul>
        </nav>
    );
    
}

export default Navbar;