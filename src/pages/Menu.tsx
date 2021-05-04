import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, PizzaBlock, Sorting } from "../components";
import { fetchPizzas } from "../redux/actions/pizzas";
import { IRootState } from "../types";

const Menu = () => {
  const dispatch = useDispatch();
  const { pizzas, filters, cart } = useSelector(
    ({ pizzas, filters, cart }: IRootState) => ({
      pizzas: pizzas.pizzaObjects,
      filters: filters,
      cart: cart.items
    })
  );
console.log(cart);

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
          <PizzaBlock key={pizza.id + '_' + pizza.category} {...pizza} dispatch={dispatch}/>
        ))}
      </section>
    </>
  );
};

export default Menu;
