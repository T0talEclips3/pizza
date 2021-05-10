import { Link } from "react-router-dom";
import emptyCartPng from "../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div className='cart cart--empty'>
      <h2>Корзина пустая</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCartPng} alt='Empty cart' />
      <Link to='/' className='button button--black'>
        Вернуться назад
      </Link>
    </div>
  );
};

export default CartEmpty;
