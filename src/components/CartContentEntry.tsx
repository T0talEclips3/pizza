import React, { useCallback } from "react";
import { addItem, deleteItem, deleteEntry } from "../redux/cart";
import Button from "./Button";
import TrashIcon from "../assets/img/trash-icon.svg";
import MinusIcon from "../assets/img/minus-icon.svg";
import PlusIcon from "../assets/img/plus-icon.svg";
import { IPizzaObject } from "../types";

interface ICartContentEntryProps extends IPizzaObject {
  number: number;
  dispatch: Function;
}

const CartContentEntry = ({
  id,
  name,
  dough,
  imageUrl,
  price,
  pizzaSize,
  number,
  dispatch,
}: ICartContentEntryProps) => {
  const pizzaObject = { id, name, dough, imageUrl, price, pizzaSize };

  const doughTypes = ["тонкое", "традиционное"];

  const handleClickAdd = useCallback(() => {
    dispatch(addItem(pizzaObject));
  }, []);
  const handleClickDelete = useCallback(() => {
    dispatch(deleteItem(pizzaObject));
  }, []);
  const handleClickDeleteAll = useCallback(() => {
    if (window.confirm("Вы уверены?")) {
      dispatch(deleteEntry(pizzaObject));
    }
  }, []);

  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      </div>
      <div className='cart__item-info'>
        <h3>{name}</h3>
        <p>
          {doughTypes[dough]} тесто, {pizzaSize} см.
        </p>
      </div>
      <div className='cart__item-count'>
        <Button circle outline clickHandler={handleClickDelete}>
          <img src={MinusIcon} alt='Minus' />
        </Button>
        <b>{number}</b>
        <Button circle outline clickHandler={handleClickAdd}>
          <img src={PlusIcon} alt='Plus' />
        </Button>
      </div>
      <div className='cart__item-price'>
        <b>{price} ₽</b>
      </div>
      <div className='cart__item-remove'>
        <Button circle outline clickHandler={handleClickDeleteAll}>
          <img src={TrashIcon} alt='Cross' />
        </Button>
      </div>
    </div>
  );
};

export default CartContentEntry;
