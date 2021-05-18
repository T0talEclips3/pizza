import React from "react";
import successImg from "../assets/img/success-svgrepo-com.svg";

const PaymentFormSuccess = () => {
  React.useEffect(() => {
    setTimeout(() => {
      const modal = document.querySelector(".modal");
      const wrapper = document.querySelector(".wrapper");
      wrapper!.removeChild(modal!);
      document.body.className = "";
    }, 5000);
  });

  return (
    <figure className='modal-success'>
      <img className='modal-success__pic' src={successImg} alt='success' />
      <figcaption>
        <b>Заказ выполнен успешно!</b>
      </figcaption>
    </figure>
  );
};

export default PaymentFormSuccess;
