import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { IRootState } from "../types";

const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector(
    ({ cart }: IRootState) => cart
  );

  return (
    <div className='content'>
      <div className='container container--cart'>
        <div className='cart'>
          <div className='cart__top'>
            <h2 className='content__title'>Корзина</h2>
            <div className='cart__clear'>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className='content__items'>
            {Object.values(items).map((cartItem) => (
              <CartItem {...cartItem[0]} number={cartItem.length} />
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
      </div>
    </div>
  );
};

export default Cart;
