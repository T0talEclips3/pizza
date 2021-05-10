import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { wipeCart } from "../redux/cart";
import { IPizzaInCart } from "../types";
import Button from "./Button";
import CartContentEntry from "./CartContentEntry";

export interface ICartContentProps {
  cartEntries: {
    pizza: IPizzaInCart;
    count: number;
  }[];
  totalPrice: number;
  totalCount: number;
}

const CartContent = React.memo(
  ({ cartEntries, totalPrice, totalCount }: ICartContentProps) => {
    const dispatch = useDispatch();

    const handleClickWipeCart = () => {
      if (window.confirm("Вы уверены?")) {
        dispatch(wipeCart());
      }
    };

    return (
      <div className='cart'>
        <div className='cart__top'>
          <h2 className='content__title'>Корзина</h2>
          <div className='cart__clear'>
            <span onClick={handleClickWipeCart}>Очистить корзину</span>
          </div>
        </div>
        <div className='content__items'>
          {cartEntries.map(({ pizza, count }) => (
            <CartContentEntry
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
            <Button outline add back>
              <Link to='/'>Вернуться назад</Link>
            </Button>
            <div className='button pay-btn'>
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CartContent;
