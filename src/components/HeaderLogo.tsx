import { Link } from "react-router-dom";
import pizzaLogo from "../assets/img/pizza-logo.svg";

const HeaderLogo = () => {
  return (
    <div className='header__logo'>
      <Link to='/'>
        <img width='38' src={pizzaLogo} alt='Pizza logo' />
        <h1>React Pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </Link>
    </div>
  );
};

export default HeaderLogo;
