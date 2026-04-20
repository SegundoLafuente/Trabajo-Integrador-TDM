import React, {Component} from "react";
import Card from "../Card/Card";
import './styles.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class SeccionCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas:[],
            vermas:''

        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.categoria}?api_key=6aad86ecf8fd94ac9b44f0afc185ea99`)
	    .then( response => response.json() )
	    .then( data => this.setState(
        {peliculas: data.results}
        ))
	    .catch( error => console.log(error) )
        }
         


    render(){
        
        return(
            <section className="row cards" id="movies">
                {this.state.peliculas.length === 0 ? (<h3>Cargando peliculas...</h3>) : (this.state.peliculas.slice(0,this.props.cantidad).map((card, index) => <Card key={card.id + index} movie={card} /> ))}
                 <Link className='btn alert-primary' to={`/${this.props.categoria}`} >Ver Mas peliculas</Link>
            </section>
        )
    }
}

export default SeccionCard;