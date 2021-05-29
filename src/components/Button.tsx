import React from "react";

export interface IButtonProps {
  children: React.ReactNode;
  outline?: true;
  circle?: true;
  add?: true;
  back?: true;
  cart?: true;
  pay?: true;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.memo(
  ({
    children,
    outline,
    circle,
    add,
    back,
    cart,
    pay,
    clickHandler,
  }: IButtonProps) => {
    return (
      <button
        onClick={clickHandler}
        className={`button${outline ? " button--outline" : ""}${
          circle ? " button--circle" : ""
        }${add ? " button--add" : ""}${back ? " go-back-btn" : ""}${
          cart ? " button--cart" : ""
        }${pay ? " pay-btn" : ""}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
