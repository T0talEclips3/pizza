import React from "react";
import { Redirect } from "react-router";
import FormStepOne from "./PaymentFormCustomer";
import FormStepThree from "./PaymentFormPaymentMethod";
import FormStepTwo from "./PaymentFormAddress";
import Button from "./Button";

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
  });

  console.log(formData);

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
            <FormStepOne handleFormChange={handleFormChange} />
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
            <FormStepTwo handleFormChange={handleFormChange} />
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
            <FormStepThree handleFormChange={handleFormChange} />
          </form>
          <footer className='modal-footer'>
            <Button clickHandler={prevStep}>Назад</Button>
          </footer>
        </div>
      );
    default:
      return <Redirect to='/' />;
  }
};

export default PaymentForm;
