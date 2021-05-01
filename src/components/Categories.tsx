import React from "react";

type CategoriesProps = {
  pizzaTypes: Array<string>;
};

const Categories = (props: CategoriesProps) => {
  const [category, setCategory] = React.useState<number | null>(null);

  return (
    <nav className='categories'>
      <ul>
        <li
          className={category === null ? "active" : ""}
          onClick={() => setCategory(null)}
        >
          Все
        </li>
        {props.pizzaTypes.map((pizzaType, index) => (
          <li
            key={pizzaType + "_" + index}
            className={category === index ? "active" : ""}
            onClick={() => {
              setCategory(index);
            }}
          >
            {pizzaType}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
