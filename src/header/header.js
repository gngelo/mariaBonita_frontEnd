import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Maria Bonita</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="navbar-nav mr-auto">
                    <Link to="/Cadastrar" className="nav-item">
                        <a className="nav-link" href="#">Cadastrar</a>
                    </Link>
                    <Link to="/Listar" className="nav-item">
                        <a className="nav-link" href="#">Listar</a>
                    </Link>
                </ul>

            </div>
            </nav>

            <div className="jumbotron text-center">
                <h1>Bem vindo a Loja Maria Bonita!</h1>
            </div>
        </>
    )
};

export default NavBar;