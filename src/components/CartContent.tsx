import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { wipeCart } from "../redux/cart";
import { IPizzaObject } from "../types";
import Button from "./Button";
import CartContentEntry from "./CartContentEntry";
import PaymentForm from "./PaymentForm";
import PaymentModal from "./PaymentModal";

export interface ICartContentProps {
  cartEntries: {
    pizza: IPizzaObject;
    count: number;
  }[];
  totalPrice: number;
  totalCount: number;
}

const CartContent = ({
  cartEntries,
  totalPrice,
  totalCount,
}: ICartContentProps) => {
  const dispatch = useDispatch();

  const handleClickWipeCart = () => {
    if (window.confirm("Вы уверены?")) {
      dispatch(wipeCart());
    }
  };

  const [isModalOpen, setModalOpen] = React.useState(false);

  const closePaymentModal = () => {
    setModalOpen(false);
  };
  const openPaymentModal = () => {
    setModalOpen(true);
  };
  return (
    <div className='cart'>
      {isModalOpen && (
        <PaymentModal>
          <PaymentForm closePaymentModal={closePaymentModal} />
        </PaymentModal>
      )}
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
          <Button pay clickHandler={openPaymentModal}>
            Оплатить сейчас
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
