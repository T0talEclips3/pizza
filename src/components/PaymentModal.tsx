import React from "react";
import ReactDOM from "react-dom";

export interface IPaymentModalProps {
  children: React.ReactNode;
}

const PaymentModal = ({ children }: IPaymentModalProps) => {
  const element = React.useRef(document.createElement("div"));

  React.useEffect(() => {
    const root = document.querySelector(".wrapper");
    element.current.className = "modal";
    root!.appendChild(element.current);
    return () => {
      root!.removeChild(element!.current);
    };
  });
  return ReactDOM.createPortal(children, element.current);
};

export default PaymentModal;
