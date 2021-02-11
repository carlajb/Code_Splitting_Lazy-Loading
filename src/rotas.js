import {Switch, Route, Router} from 'react-router-dom';
import Produtos from './pages/produtos';
import Pedidos from './pages/pedidos';
import Pagina from './pages/pginicial';

function Rotas() {
    return (
       
        <Switch>
          
            <Route exact path="/produtos" component={Produtos} />
      
            <Route exact path="/Pedidos" component={Pedidos} />

            <Route exact path="/" component={Pagina} />

          
           
           
            
        </Switch>
      
    );
}  

export default Rotas; 




