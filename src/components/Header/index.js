import { Link } from "react-router-dom";


import "./styles.css";
import Logo from '../../img/logo.png';

const Header = () => {
  return (
    <main className="container-main">
      <div>     
        <img src= { Logo }/>
     </div> 
     <div>
       <h1>Donna Sô Saboaria Artesanal</h1> 
     </div>
      
      <ul>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/service">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link to="/contato">
            <a>Contato</a>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Header;
