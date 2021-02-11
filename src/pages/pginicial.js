import React from 'react';
import { img,div,bg} from 'react-bootstrap';


function Pagina() {
    return (

<form className="form-floating" class="col-md-12" >

<img background-position-center width= "20%" height= "40%" src={require(`../Components/produto/img/fotopagina.jpg`).default}alt="imagem de produtos" />
<img background-position-center width= "40%" height= "40%" src={require(`../Components/produto/img/fotopagina.jpg`).default}alt="imagem de produtos" />
<img background-position-center width= "20%" height= "40%" src={require(`../Components/produto/img/fotopagina.jpg`).default}alt="imagem de produtos" />



</form>
);
}

export default Pagina