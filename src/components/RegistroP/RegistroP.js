import React from "react";

import { Link } from 'react-router-dom';
import RegistroH from "../RegistroH/RegistroH";

function Footer(){
    return(

        <div class="row justify-content-center">
            <div class="col-md-6">
        <RegistroH/>
        <p class="mt-3 text-center">¿Ya tenés cuenta? <Link to='/Login'>Iniciar sesión</Link></p>
            </div>
        </div>

    );
}

export default Footer;