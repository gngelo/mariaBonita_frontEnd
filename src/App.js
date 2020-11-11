import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

import './App.css'

import Header from './header/header';
import Footer from './footer/footer';
import { HashRouter } from 'react-router-dom' 
import Routes from './rotas'

function App() {
  return (
    <HashRouter>
        <div className="app">
            <Header/>
            <Routes/>
            <Footer/>
        </div>
    </HashRouter>
  );
}

export default App;
