import CartEmpty from "../components/CartEmpty";
import CartContent from "../components/CartContent";
import { useSelector } from "react-redux";
import { IRootState } from "../types";
import React from "react";

const Cart = React.memo(() => {
  const { items, totalCount, totalPrice } = useSelector(
    ({ cart }: IRootState) => cart
  );

  const cartEntries = Object.values(items);

  return (
    <div className='content'>
      <div className='container container--cart'>
        {totalCount > 0 ? (
          <CartContent
            cartEntries={cartEntries}
            totalPrice={totalPrice}
            totalCount={totalCount}
          />
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
});

export default Cart;
