import React, {Component} from "react";
import Serie from "../Serie/Serie";
import './styles.css'


class SerieSection extends Component{
    constructor(){
        super()
        this.state = {
            series: [],
            Pag: 1
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=1a700a291cf896745821e2c04ca0ecaa")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
                series: data.results,
                siguientePag: data.page + 1
            })
        })
        .then(console.log(this.state.siguientePag))
        .catch(error => console.log(error));
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=6aad86ecf8fd94ac9b44f0afc185ea99=${this.state.Pag}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                series: this.state.series.concat(data.results),
                siguientePag: data.page + 1
            })
        })
        .then(console.log(this.state.series))
        .catch((error)=>console.log(error))

    }

    render(){
        return(
            <>
                <section class="row cards" id="movies">
                    {this.state.series == [] ? <h1>Cargando...</h1>: this.state.series.map((serie, idx) => <Serie key = {(serie + idx)} serie={serie}/>)}
                    <button className = "boton-cargar.mas" onClick={()=>this.cargarMas()}>Cargar más</button>
                </section>
            </>
        )
    }
}


export default SerieSection;