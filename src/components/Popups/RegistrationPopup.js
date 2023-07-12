import { Popup } from "./Popup";
import succesIcon from '../../images/registration/success.svg'
import errorIcon from '../../images/registration/error.svg'

export const RegistrationPopup = ({ name, isOpen, onClose }) => {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <div className="registration-response">
        <img src={succesIcon}  className="registration-response__icon" alt='Успешно' />
        <p>Вы успешно зарегистрировались</p>
      </div>
    </Popup>
  );
};
