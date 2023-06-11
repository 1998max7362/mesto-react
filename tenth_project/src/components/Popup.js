export const Popup = ({name, children, isOpen, onClose}) => {



  return (
    <div className={`popup popup_type_${name} ${isOpen&&'popup_opened'}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          aria-label="Close"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
};
