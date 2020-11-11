import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import CadastrarClientes from './cadastrar/cadastrar'
import ListarClientes from './listar/listar'


export default props =>
<Switch>
    <Route exact path="/Cadastrar" component={CadastrarClientes} />
    <Route exact path="/Listar" component={ListarClientes} />
    <Redirect from="*" to="/" />
</Switch>