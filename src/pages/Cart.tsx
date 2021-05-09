import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { wipeCart } from "../redux/actions/cart";
import { IPizzaInCart, IRootState } from "../types";
import emptyCartPic from "../assets/img/empty-cart.png";

export interface IPizzaObject {
  pizzaObject: IPizzaInCart;
  pizzaNumber: number;
}

const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector(
    ({ cart }: IRootState) => cart
  );

  const dispatch = useDispatch();
  const handleClickWipeCart = () => {
    dispatch(wipeCart());
  };

  const pizzaArray = Object.values(items);

  return (
    <div className='content'>
      <div className='container container--cart'>
        {!totalCount ? (
          <div className='cart cart--empty'>
            <h2>Корзина пустая</h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCartPic} alt='Empty cart' />
            <Link to='/' className='button button--black'>
              Вернуться назад
            </Link>
          </div>
        ) : (
          <div className='cart'>
            <div className='cart__top'>
              <h2 className='content__title'>Корзина</h2>
              <div className='cart__clear'>
                <span onClick={handleClickWipeCart}>Очистить корзину</span>
              </div>
            </div>
            <div className='content__items'>
              {pizzaArray.map(({ pizza, count }) => (
                <CartItem
                  key={pizza.id + "" + pizza.dough + "" + pizza.pizzaSize}
                  {...pizza}
                  number={count}
                  dispatch={dispatch}
                />
              ))}
            </div>
            <div className='cart__bottom'>
              <div className='cart__bottom-details'>
                <span>
                  Всего пицц: <b>{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice} ₽</b>
                </span>
              </div>
              <div className='cart__bottom-buttons'>
                <Link
                  to='/'
                  className='button button--outline button--add go-back-btn'
                >
                  Вернуться назад
                </Link>
                <div className='button pay-btn'>
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
