export interface IFormStepTwoProps {
  handleFormChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormStepTwo = ({ handleFormChange }: IFormStepTwoProps) => {
  return (
    <>
      <div className='modal-form__field'>
        <label>Город</label>
        <input type='text' name='city' value={""} onChange={handleFormChange} />
      </div>
      <div className='modal-form__field'>
        <label>Улица</label>
        <input
          type='text'
          name='street'
          value={"street"}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Дом</label>
        <input
          type='text'
          name='house'
          value={"house"}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Квартира</label>
        <input
          type='text'
          name='apartment'
          value={"apartment"}
          onChange={handleFormChange}
        />
      </div>
    </>
  );
};

export default FormStepTwo;
