export interface IFormStepThreeProps {
  handleFormChange: React.ChangeEventHandler<HTMLInputElement>;
}
const FormStepThree = ({ handleFormChange }: IFormStepThreeProps) => {
  return (
    <>
      <div className='modal-form__field'>
        <label>Номер карты</label>
        <input
          type='text'
          name='street'
          value={"street"}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Имя держателя карты</label>
        <input type='text' name='city' value={""} onChange={handleFormChange} />
      </div>
      <div className='modal-form__field'>
        <label>Действительна до</label>
        <input
          type='text'
          name='house'
          value={"house"}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>CVV2/CVC2</label>
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

export default FormStepThree;
