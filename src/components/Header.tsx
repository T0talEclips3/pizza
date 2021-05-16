import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "../types";
import cartIcon from "../assets/img/cart-icon.svg";
import HeaderLogo from "./HeaderLogo";
import Button from "./Button";

const Header = () => {
  const { totalPrice, totalCount } = useSelector(
    (state: IRootState) => state.cart
  );
  return (
    <header className='header'>
      <div className='container'>
        <HeaderLogo />
        <Button cart>
          <Link to='/cart'>
            <span>{totalPrice} ₽</span>
            <div className='button__delimiter'></div>
            <span>{totalCount} </span>
            <img src={cartIcon} alt='cart' />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
