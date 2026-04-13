import React from "react";
import LoginHijo from "../LoginHijo/LoginHijo";
import { Link } from 'react-router-dom';

function Footer(){
    return(

        <div class="row justify-content-center">
            <div class="col-md-6">
        <LoginHijo/>
        <p class="mt-3 text-center">¿No tenés cuenta? <Link to='/Registro'>Registrarse</Link></p>
            </div>
        </div>

    );
}

export default Footer;