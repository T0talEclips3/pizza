import React from "react";
import { Dispatch } from "redux";
import { addItem } from "../redux/cart";
import { IMenuItem } from "../types";
import plusIcon from "../assets/img/plus-icon.svg";
import Button from "./Button";

export interface IMenuItemProps extends IMenuItem {
  dispatch: Dispatch;
}

const PizzaBlock = (props: IMenuItemProps) => {
  const { id, imageUrl, name, types, sizes, price, dispatch } = props;

  const allSizes = [26, 30, 40];
  const allDough = [0, 1];

  const [pizzaSize, setPizzaSize] = React.useState(sizes[0]);
  const [dough, setDough] = React.useState(types[0]);

  const handleClickDispatch = () => {
    dispatch(addItem({ id, imageUrl, name, dough, pizzaSize, price }));
  };

  return (
    <article className='menu-item'>
      <figure>
        <img className='menu-item__image' src={imageUrl} alt='menu-item' />
        <figcaption className='menu-item__title'>{name}</figcaption>
      </figure>
      <div className='menu-item__selector'>
        <ul>
          {allDough.map((doughType, index) => {
            const doughName = doughType === 0 ? "тонкое" : "традиционное";

            return types.includes(doughType) ? (
              <li
                key={index + "+" + doughType}
                className={dough === doughType ? "active" : ""}
                onClick={() => {
                  setDough(doughType);
                }}
              >
                {doughName}
              </li>
            ) : (
              <li
                key={index + "+" + doughType + "disabled"}
                className='disabled'
              >
                {doughName}
              </li>
            );
          })}
        </ul>
        <ul>
          {allSizes.map((sizeType, index) => {
            return sizes.includes(sizeType) ? (
              <li
                key={index + "+" + sizeType}
                className={sizeType === pizzaSize ? "active" : ""}
                onClick={() => {
                  setPizzaSize(sizeType);
                }}
              >
                {sizeType} см.
              </li>
            ) : (
              <li
                key={index + "+" + sizeType + "disabled"}
                className='disabled'
              >
                {sizeType} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className='menu-item__bottom'>
        <div className='menu-item__price'>от {price} ₽</div>
        <Button add outline clickHandler={handleClickDispatch}>
          <img src={plusIcon} alt='plus-icon' />
          <span>Добавить</span>
        </Button>
      </div>
    </article>
  );
};

export default PizzaBlock;
