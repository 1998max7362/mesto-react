export const PopupWithForm = ({ name, title, submitButtonText, children }) => {
  return (
    <Popup name={name}>
      <form className="form" name={name} noValidate>
        <h2 className="form__name">{title}</h2>
        {children}
        <button
          type="submit"
          className="form__save-button"
          aria-label="Сохранить"
        >
          {submitButtonText}
        </button>
      </form>
    </Popup>
  );
};
