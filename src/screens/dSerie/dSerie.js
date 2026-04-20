import './styles.css'
import React, {Component} from "react";
import Navbar from "../../components/Navbar/Navbar";


class dSerie extends Component{

    constructor(props){
        super(props)
        this.state = {
           id: props.match.params.id,
           serie: [], 
           generos: []
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=6aad86ecf8fd94ac9b44f0afc185ea99`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                serie: data,
                generos: data.genres
            })

        })
        .catch((error) =>{
            console.log(error)
            
        }) 
    }
    render(){
    return(
        <>
        <Navbar />
        {this.state.serie === [] ? <h1>Cargando...</h1>:<article>
            <img src= {`https://image.tmdb.org/t/p/w342/${this.state.serie.poster_path}`} alt='a'/>
            <h2>{this.state.serie.original_title}</h2>
            <p>Rating: {this.state.serie.vote_average}</p>
            <p>Fecha de estreno: {this.state.serie.release_date}</p>
            <p>Sinópsis: {this.state.serie.overview}</p>
            <p>Géneros:</p>
            <ul>
                {this.state.generos.map((genero)=> <li>{genero.name}</li>)}  
            </ul> 
            <button>Favoritos</button>

            </article>}
      </>  
    )
    }
}
export default dSerie