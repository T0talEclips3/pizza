export interface IFormStepThreeProps {
  handleFormChange: React.ChangeEventHandler<HTMLInputElement>;
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  CVV2CVC2: number;
}
const FormStepThree = ({
  handleFormChange,
  CVV2CVC2,
  cardNumber,
  cardholderName,
  expirationDate,
}: IFormStepThreeProps) => {
  return (
    <fieldset>
      <legend>Оплата заказа</legend>
      <div className='modal-form__field'>
        <label>Номер карты</label>
        <input
          type='text'
          name='cardNumber'
          value={cardNumber}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Имя держателя карты</label>
        <input
          type='text'
          name='cardholderName'
          value={cardholderName}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Действительна до</label>
        <input
          type='month'
          name='expirationDate'
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>CVV2/CVC2</label>
        <input
          type='text'
          name='CVV2CVC2'
          value={CVV2CVC2}
          maxLength={3}
          onChange={handleFormChange}
        />
      </div>
    </fieldset>
  );
};

export default FormStepThree;
