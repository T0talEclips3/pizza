import React from "react";
import { useDispatch } from "react-redux";
import successImg from "../assets/img/success-svgrepo-com.svg";
import { wipeCart } from "../redux/cart";

interface IPaymentFormSuccessProps {
  closePaymentModal: Function;
}

const PaymentFormSuccess = ({
  closePaymentModal,
}: IPaymentFormSuccessProps) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      closePaymentModal();
      dispatch(wipeCart());
    }, 3000);
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
