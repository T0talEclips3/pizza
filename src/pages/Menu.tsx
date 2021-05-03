import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, PizzaBlock, Sorting } from "../components";
import { fetchPizzas } from "../redux/actions/pizzas";
import { IStore } from "../types";

const Menu = () => {
  const dispatch = useDispatch();
  const { pizzas, filters } = useSelector(({ pizzas, filters }: IStore) => ({
    pizzas: pizzas.pizzaObjects,
    filters: filters,
  }));

  React.useEffect(() => {
    dispatch(fetchPizzas(filters.category, filters.sortBy));
    // eslint-disable-next-line
  }, [filters]);

  return (
    <>
      <div className='content__top'>
        <Categories dispatch={dispatch} category={filters.category} />
        <Sorting dispatch={dispatch} sortBy={filters.sortBy} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <section className='content__items'>
        {pizzas.map((pizza) => (
          <PizzaBlock {...pizza} />
        ))}
      </section>
    </>
  );
};

export default Menu;
