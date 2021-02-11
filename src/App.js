import Menu from './Components/Menu/index';
import {BrowserRouter} from 'react-router-dom'
import {container} from 'react-bootstrap';
import Rotas from './rotas';
import './App.css';
import {Component,lazy, Suspense} from 'react';
//import React, {Component, lazy,} from 'react';
// import Slogan from './Components/Slogan';
// import Rodape from './Components/Rodape';
const Slogan = lazy(()=> import ('./Components/Slogan'));
const Rodape = lazy(()=> import('./Components/Rodape'));
const Comp = lazy(()=> import('./Components/Comp'));

function App() {
  return (
   
<BrowserRouter>
<div className="App">
  <header>
  <Menu /> 
<Suspense fallback>{<p>Carregando ...</p>}
   <Slogan />
</Suspense>
</header>
   <main>
   <table />
   <img />
<container fluid>
    <Rotas />
   
    </container>
    </main>
 
    <Suspense fallback> {<p>Carregando ...</p> }
    <Comp />
    </Suspense>
    
    <Suspense fallback> {<p>Carregando ...</p> }
    <Rodape />
    </Suspense>
   
  </div>
</BrowserRouter>
  );
}
export default App;
