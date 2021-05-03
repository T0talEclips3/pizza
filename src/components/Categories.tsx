import React from "react";
import { Dispatch } from "redux";
import { setCategory } from "../redux/actions/filters";

export interface ICategoriesProps {
  category: null | number;
  dispatch: Dispatch;
}

const Categories = React.memo(({ category, dispatch }: ICategoriesProps) => {
  const pizzaTypes = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <nav className='categories'>
      <ul>
        <li
          className={category === null ? "active" : ""}
          onClick={() => {
            dispatch(setCategory(null));
          }}
        >
          Все
        </li>
        {pizzaTypes.map((pizzaType, index) => (
          <li
            key={pizzaType + "_" + index}
            className={category === index ? "active" : ""}
            onClick={() => {
              if (category !== index) {
                dispatch(setCategory(index));
              }
            }}
          >
            {pizzaType}
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Categories;
