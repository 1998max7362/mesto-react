export const Popup = ({name, children}) => {
  return (
    <div className={`popup popup_type_${name}`}  >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          aria-label="Close"
        ></button>
        {children!==undefined&&children}
      </div>
    </div>
  );
};
