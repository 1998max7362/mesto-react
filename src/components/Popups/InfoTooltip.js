import { Popup } from "./Popup";
import succesIcon from '../../images/registration/success.svg'
import errorIcon from '../../images/registration/error.svg'

export const InfoTooltip = ({ name, isOpen, onClose }) => {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <div className="info-tooltip">
        <img src={succesIcon}  className="info-tooltip__icon" alt='Иконка ответа на регистрацию' />
        <p className="info-tooltip__text">Вы успешно зарегистрировались!</p>
      </div>
    </Popup>
  );
};
