import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "../types";
import Container from "./Container";
import pizzaLogo from "../assets/img/pizza-logo.svg";
import cartIcon from "../assets/img/cart-icon.svg";
import React from "react";
import HeaderLogo from "./HeaderLogo";

const Header = React.memo(() => {
  const { totalPrice, totalCount } = useSelector(
    (state: IRootState) => state.cart
  );
  return (
    <header className='header'>
      <Container>
        <HeaderLogo />
        <div className='header__cart'>
          <Link to='/cart' className='button button--cart'>
            <span>{totalPrice} ₽</span>
            <div className='button__delimiter'></div>
            <span>{totalCount} </span>
            <img src={cartIcon} alt='cart' />
          </Link>
        </div>
      </Container>
    </header>
  );
});

export default Header;
