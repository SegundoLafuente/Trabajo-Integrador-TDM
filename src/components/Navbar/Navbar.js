import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav>
        <ul className="main-nav">
             <li>
        <Link to="/">Home</Link>
        </li>
         <li>
        <Link to="/Peliculas">Peliculas</Link>
         </li>
         <li>
        <Link to="/Series">Series</Link>
         </li>
         <li>
        <Link to="/Favoritos">Favoritos</Link>
         </li>
        </ul>
        <ul className="user">  
         <li>
        <Link to="/Registro">Registro</Link>
         </li>
         <li>
        <Link to="/Login">Login</Link>
         </li>
        </ul>
    </nav>
    );
}

export default Navbar;