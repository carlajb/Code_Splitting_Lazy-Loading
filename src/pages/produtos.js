
import { table,div,thead,th,tbody } from 'react-bootstrap';



function Produtos() {
    return (
   


<div className="container-fluid">

<table className="table">
  <thead class="bg-warning">
    <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Nome</th>
      <th scope="col">Descricao</th>
      <th scope="col">Preco</th>
     <th scope="col">IMAGEM</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Bolo de Cenoura com Chocolate </td>
      <td>cenoura,farinha de trigo </td>
      <td>10.00</td>
      <td><img src={require(`../Components/produto/img/bolocenoura.jpg`).default}alt="imagem de produtos" /></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Bolo de Cenoura com Chocolate </td>
      <td>cenoura,farinha de trigo </td>
      <td>10.00</td>
      <td><img src={require(`../Components/produto/img/bolococo.jpg`).default}alt="imagem de produtos" /></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Bolo de Cenoura com Chocolate </td>
      <td>cenoura,farinha de trigo </td>
      <td>10.00</td>
      <td><img src={require(`../Components/produto/img/bololaranja.jpg`).default} alt="imagem de produtos" /></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Bolo de Cenoura com Chocolate </td>
      <td>cenoura,farinha de trigo </td>
      <td>10.00</td>
      <td><img src={require(`../Components/produto/img/bololimao.jpg`).default} alt="imagem de produtos" /></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Bolo de Cenoura com Chocolate </td>
      <td>cenoura,farinha de trigo </td>
      <td>10.00</td>
      <td><img src={require(`../Components/produto/img/bolomaracuja.jpg`).default}alt="imagem de produtos" /></td>
    </tr>
    
 
 
</tbody>
 </table>
  </div>  
         
   
          
    );
}

export default Produtos












