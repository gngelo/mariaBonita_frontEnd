
import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/clientes';

const initialState = {
    cliente: {
        nome: '',
        endereco: '',
        telefone: '',
        dataNascimento: '',
        bairro: '',
        cep: '',
        pontoReferencia: '',
        email: ''
    },
    list: []
}

class ListarClientes extends Component {

    state = { ...initialState }

    componentDidMount(){
        axios(baseUrl).then(resp=>{
            this.setState({ list: resp.data})
        })
    }

    //Editar cliente
    load(cliente){
        this.setState({ cliente })
    }

    //Remover cliente
    remove(cliente){
        axios.delete(`${baseUrl}/${cliente.id}`)
        .then(resp => {
            const list = this.state.list.filter(u => u !== cliente)
            this.setState({ list })
        })
    }


    renderRows(){
        return this.state.list.map(cliente =>{
            return(
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.endereco}</td>
                    <td>{cliente.bairro}</td>
                    <td>{cliente.cep}</td>                    
                    <td>{cliente.telefone}</td>
                    <td>{cliente.email}</td>
                    <td>
                        <button className="btn btn-warning justify-content-end"
                            onClick={()=>this.load(cliente)}>
                                <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2 justify-content-end"
                            onClick={()=>this.remove(cliente)}>
                                <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })        
    }

    render(){
        return(
            <div className="container">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Bairro</th>
                            <th>Cep</th>
                            
                            <th>Telefone</th>
                            <th>E-mail</th>
                            
                        </tr>
                    </thead>
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>            
        )
    }

};

export default ListarClientes;
    