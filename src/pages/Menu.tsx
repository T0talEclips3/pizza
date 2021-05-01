import { Categories, PizzaBlock, Sorting } from "../components";

const Menu = () => {
  const pizzaType = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <>
      <div className='content__top'>
        <Categories pizzaTypes={pizzaType} />
        <Sorting />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <section className='content__items'>
        <PizzaBlock />
      </section>
    </>
  );
};

export default Menu;
