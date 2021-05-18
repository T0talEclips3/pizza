export interface IFormStepTwoProps {
  handleFormChange: React.ChangeEventHandler<HTMLInputElement>;
  city: string;
  street: string;
  house: string;
  apartment: string;
}

const FormStepTwo = ({
  handleFormChange,
  city,
  apartment,
  house,
  street,
}: IFormStepTwoProps) => {
  return (
    <fieldset>
      <legend>Укажите адрес доставки</legend>
      <div className='modal-form__field'>
        <label>Город</label>
        <input
          type='text'
          name='city'
          value={city}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Улица</label>
        <input
          type='text'
          name='street'
          value={street}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Дом</label>
        <input
          type='text'
          name='house'
          value={house}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Квартира</label>
        <input
          type='text'
          name='apartment'
          value={apartment}
          onChange={handleFormChange}
        />
      </div>
    </fieldset>
  );
};

export default FormStepTwo;
