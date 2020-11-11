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
    }
}

class CadastrarClientes extends Component {

    state = { ...initialState }

    componentDidMount(){
        axios(baseUrl).then(resp=>{
            this.setState({ list: resp.data})
        })
    }

    clear(){
        this.setState({cliente: initialState.cliente})
    }

    save(){
        const cliente = this.state.cliente;
        
        axios.post(baseUrl,cliente).then(resp=>{
            this.setState({ cliente: initialState.cliente});
        })
    }

    updateField(e){
        const cliente = {...this.state.cliente}
        cliente[e.target.name]=e.target.value
        this.setState({cliente})
    }

    onBlurCep(e){
        const { value } = e.target;
        const cep = value?.replace(/[^0-9]/g, '');
        if(cep?.length !== 8){
            return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then((res)=> res.json())
        .then((data)=> {
            // setFieldValue('bairro', data.bairro)
            // setFieldValue('endereco', data.logradouro)
            console.log(data)
        });
    }

    render(){
        return(
            <div className="container mb-5">

                <div className="form col">
                    <div className="row col-12">
                        <div className="form-group col-10">
                            <label>Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nome"
                                value={this.state.cliente.nome}
                                onChange={e=> this.updateField(e)}
                                placeholder="Nome"
                            /> 
                        </div>
                        <div className="form-group col-2">
                            <label>Data de Nascimento</label>
                            <input
                                type="date"
                                className="form-control"
                                name="dataNascimento"
                                value={this.state.cliente.dataNascimento}
                                onChange={e=> this.updateField(e)}
                                placeholder="Data de Nascimento"
                            /> 
                        </div>
                    </div>

                    <div className="row col-12">
                        <div className="form-group col-6">
                            <label>Endereço</label>
                            <input
                                type="text"
                                className="form-control"
                                name="endereco"
                                value={this.state.cliente.endereco}
                                onChange={e=> this.updateField(e)}
                                placeholder="Endereço"
                            /> 
                        </div>
                        <div className="form-group col-2">
                            <label>Bairro</label>
                            <input
                                type="text"
                                className="form-control"
                                name="bairro"
                                value={this.state.cliente.bairro}
                                onChange={e=> this.updateField(e)}
                                placeholder="Bairro"
                            /> 
                        </div>
                        <div className="form-group col-2">
                            <label>Cep</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cep"
                                value={this.state.cliente.cep}
                                onChange={e=> this.updateField(e)}
                                onBlur={(e)=> this.onBlurCep(e)}
                                placeholder="Cep"
                            /> 
                        </div>
                        <div className="form-group col-2">
                            <label>Telefone</label>
                            <input
                                type="text"
                                className="form-control"
                                name="telefone"
                                value={this.state.cliente.telefone}
                                onChange={e=> this.updateField(e)}
                                placeholder="Telefone"
                            /> 
                        </div>
                        
                    </div>

                    <div className="row col-12">
                        <div className="form-group col-6">
                            <label>E-mail</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.cliente.email}
                                onChange={e=> this.updateField(e)}
                                placeholder="E-mail"
                            /> 
                        </div>
                        <div className="form-group col-6">
                            <label>Ponto de Referencia</label>
                            <input
                                type="text"
                                className="form-control"
                                name="pontoReferencia"
                                value={this.state.cliente.pontoReferencia}
                                onChange={e=> this.updateField(e)}
                                placeholder="Ponto de Referencia"
                            /> 
                        </div>                        
                    </div>

                    <div className="row">
                        <div className="col-6 d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={e =>this.save()}>
                                Salvar
                            </button>
                        </div>
                        <div className="col-6 d-flex justify-content-start">
                            <button className="btn btn-secundary ml-2" onClick={e =>this.clear()}>
                                Cancelar
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

};

export default CadastrarClientes;

