export interface IFormStepOneProps {
  handleFormChange: React.ChangeEventHandler<HTMLInputElement>;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}
const FormStepOne = ({
  handleFormChange,
  firstName,
  lastName,
  phoneNumber,
}: IFormStepOneProps) => {
  return (
    <fieldset>
      <legend>Укажите контактные данные</legend>
      <div className='modal-form__field'>
        <label>Телефон</label>
        <input
          type='tel'
          name='phoneNumber'
          value={phoneNumber}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Имя</label>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={handleFormChange}
        />
      </div>
      <div className='modal-form__field'>
        <label>Фамилия</label>
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={handleFormChange}
        />
      </div>
    </fieldset>
  );
};

export default FormStepOne;
