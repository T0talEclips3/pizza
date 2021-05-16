export interface IFormStepOneProps {
  handleFormChange: React.ChangeEventHandler<HTMLInputElement>;
}
const FormStepOne = ({ handleFormChange }: IFormStepOneProps) => {
  return (
    <>
      <div className='modal-form__field'>
        <label>Телефон</label>
        <input type='tel' name='phoneNumber' value={""} onChange={handleFormChange} />
      </div>
      <div className='modal-form__field'>
        <label>Имя</label>
        <input
          type='text'
          name='street'
          value={"street"}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Фамилия</label>
        <input
          type='text'
          name='house'
          value={"house"}
          onChange={handleFormChange}
        />
      </div>

    </>
  );
};

export default FormStepOne;
