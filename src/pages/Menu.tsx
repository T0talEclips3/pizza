import React from "react";
import { connect } from "react-redux";
import { Categories, PizzaBlock, Sorting } from "../components";
import { IPizza } from "../types";
import { setPizzas } from "../redux/actions/pizzas";

type Props = {
  pizzas: IPizza[];
  dispatch: Function;
};

const Menu = (props: Props) => {
  const pizzaType = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  React.useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((response) => response.json())
      .then((data) => {
        props.dispatch(setPizzas(data));
      });
  }, []);

  return (
    <>
      <div className='content__top'>
        <Categories pizzaTypes={pizzaType} />
        <Sorting />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <section className='content__items'>
        {props.pizzas?.map((pizza, index) => (
          <PizzaBlock {...pizza} />
        ))}
      </section>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    pizzas: state.pizzas.pizzas,
  };
};

export default connect(mapStateToProps)(Menu);
