import React from "react";
import { Dispatch } from "redux";
import { updateCart } from "../redux/actions/cart";
import { IPizza } from "../types";

interface IPizzaBlockProps extends IPizza {
  dispatch: Dispatch;
}

const PizzaBlock = (props: IPizzaBlockProps) => {
  const { id, imageUrl, name, types, sizes, price, dispatch } = props;

  const allSizes = [26, 30, 40];
  const allDough = [0, 1];

  const [pizzaSize, setPizzaSize] = React.useState(sizes[0]);
  const [dough, setDough] = React.useState(types[0]);

  const handleClickDispatch = () => {
    dispatch(updateCart({ id, imageUrl, name, dough, pizzaSize, price }));
  };

  return (
    <article className='pizza-block'>
      <figure>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
        <figcaption className='pizza-block__title'>{props.name}</figcaption>
      </figure>
      <div className='pizza-block__selector'>
        <ul>
          {allDough.map((doughType) => {
            const doughName = doughType === 0 ? "тонкое" : "традиционное";

            return types.includes(doughType) ? (
              <li
                className={dough === doughType ? "active" : ""}
                onClick={() => {
                  setDough(doughType);
                }}
              >
                {doughName}
              </li>
            ) : (
              <li className='disabled'>{doughName}</li>
            );
          })}
        </ul>
        <ul>
          {allSizes.map((sizeType) => {
            return sizes.includes(sizeType) ? (
              <li
                className={sizeType === pizzaSize ? "active" : ""}
                onClick={() => {
                  setPizzaSize(sizeType);
                }}
              >
                {sizeType} см.
              </li>
            ) : (
              <li className='disabled'>{sizeType} см.</li>
            );
          })}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} ₽</div>
        <div
          className='button button--outline button--add'
          onClick={handleClickDispatch}
        >
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
        </div>
      </div>
    </article>
  );
};

export default PizzaBlock;
