import React from "react";
import { Redirect } from "react-router";
import FormStepOne from "./PaymentFormCustomer";
import FormStepThree from "./PaymentFormPaymentMethod";
import FormStepTwo from "./PaymentFormAddress";
import Button from "./Button";
import PaymentFormSuccess from "./PaymentFormSuccess";

interface IPaymentFormProps {
  closePaymentModal: React.MouseEventHandler<HTMLButtonElement>;
}

const PaymentForm = ({ closePaymentModal }: IPaymentFormProps) => {
  const [formData, setFormData] = React.useState({
    step: 1,
    city: "",
    street: "",
    house: "",
    apartment: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    CVV2CVC2: 0,
  });
  const contacts = {
    phoneNumber: formData.phoneNumber,
    firstName: formData.firstName,
    lastName: formData.lastName,
  };
  const address = {
    city: formData.city,
    street: formData.street,
    house: formData.house,
    apartment: formData.apartment,
  };
  const paymentInfo = {
    cardholderName: formData.cardholderName,
    cardNumber: formData.cardNumber,
    expirationDate: formData.expirationDate,
    CVV2CVC2: formData.CVV2CVC2,
  };

  const nextStep = () => {
    setFormData((prev) => ({ ...formData, step: prev.step + 1 }));
  };

  const prevStep = () => {
    setFormData((prev) => ({ ...formData, step: prev.step - 1 }));
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentField = event.target.name;
    const currentValue = event.target.value;
    setFormData({ ...formData, [currentField]: currentValue });
  };

  switch (formData.step) {
    case 1:
      return (
        <div className='modal-content'>
          <header className='modal-header'>
            <Button circle clickHandler={closePaymentModal}>
              X
            </Button>
          </header>
          <form className='modal-form'>
            <FormStepOne handleFormChange={handleFormChange} {...contacts} />
          </form>
          <footer className='modal-footer'>
            <Button clickHandler={nextStep}>Далее</Button>
          </footer>
        </div>
      );
    case 2:
      return (
        <div className='modal-content'>
          <header className='modal-header'>
            <Button circle clickHandler={closePaymentModal}>
              X
            </Button>
          </header>
          <form className='modal-form'>
            <FormStepTwo handleFormChange={handleFormChange} {...address} />
          </form>
          <footer className='modal-footer'>
            <Button clickHandler={prevStep}>Назад</Button>
            <Button clickHandler={nextStep}>Далее</Button>
          </footer>
        </div>
      );
    case 3:
      return (
        <div className='modal-content'>
          <header className='modal-header'>
            <Button circle clickHandler={closePaymentModal}>
              X
            </Button>
          </header>
          <form className='modal-form'>
            <FormStepThree
              handleFormChange={handleFormChange}
              {...paymentInfo}
            />
          </form>
          <footer className='modal-footer'>
            <Button clickHandler={prevStep}>Назад</Button>
            <Button clickHandler={nextStep}>Заказать!</Button>
          </footer>
        </div>
      );
    case 4:
      return (
        <div className='modal-content'>
          <header className='modal-header'>
            <Button circle clickHandler={closePaymentModal}>
              X
            </Button>
          </header>
          <form className='modal-form'>
            <PaymentFormSuccess />
          </form>
        </div>
      );
    default:
      return <Redirect to='/' />;
  }
};

export default PaymentForm;
