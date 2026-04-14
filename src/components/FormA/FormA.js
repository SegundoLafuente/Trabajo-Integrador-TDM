import {Component} from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class FormularioBusqueda extends Component{
    constructor(props){
        super(props)
        this.state={
            valor: ""
        }
        
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        })
    }

    evitarForm(event){
        event.preventDefault();
        this.props.history.push('/resultados/'+ this.state.valor)
    }

    render(){
        return(
            <form onSubmit = {(event) => this.evitarForm(event)}>
                <input type = "text" onChange = {(event) => this.controlarCambios(event)}/>
                <button type = "submit">Buscar</button>
            </form>
        )
    }
}

export default withRouter (FormularioBusqueda)