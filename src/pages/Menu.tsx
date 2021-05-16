import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Categories, MenuItem, Sorting } from "../components";
import { fetchPizzas } from "../redux/menu";
import { IRootState } from "../types";

const Menu = () => {
  const dispatch = useDispatch();
  const { menu, filters } = useSelector(
    ({ menu, filters }: IRootState) => ({
      menu: menu.menuItems,
      filters: filters,
    }),
    shallowEqual
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(filters.category, filters.sorting));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <>
      <div className='content__top'>
        <Categories dispatch={dispatch} category={filters.category} />
        <Sorting dispatch={dispatch} sorting={filters.sorting} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <section className='content__items'>
        {menu.map((pizza) => (
          <MenuItem
            key={pizza.id + "_" + pizza.category}
            {...pizza}
            dispatch={dispatch}
          />
        ))}
      </section>
    </>
  );
};

export default Menu;
