import { useState } from "react";
import { PopupWithForm } from "./PopupWithForm";
import { useValidatedState } from "../useValidatedState";

export const AddPlacePopup = ({ isOpen, onClose, onAddPlaceSubmit }) => {
  // const [name, setName] = useState('')
  // const [link, setLink] = useState('')

  //Добавил валидацию таким образом. Аналогично useValidatedState можно использовать на других инпутах в других попапах
  const [name, setName, nameError, nameRef] = useValidatedState(""); 
  const [link, setLink, linkError, linkRef] = useValidatedState("");

  const handleClose = () => {
    setName("");
    setLink("");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
    onClose();
    setName("");
    setLink("");
  };


  return (
    <PopupWithForm
      name={"card"}
      title={"Новое место"}
      submitButtonText={"Создать"}
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      submitButtonActive={!(nameError === "" && linkError === "")}
    >
      <div className="form__input-container">
        <input
          className="form__input form__input_el_first"
          placeholder="Название"
          id="place_name"
          type="text"
          name="name"
          aria-label="Название"
          required
          minLength="2"
          maxLength="30"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameRef}
        />
        <span className="form__input-error" id="place_name-input-error">
          {nameError}
        </span>
        <input
          className="form__input form__input_el_second"
          placeholder="Ссылка на картинку"
          id="source_link"
          type="url"
          name="link"
          required
          aria-label="Ссылка на картинку"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          ref={linkRef}
        />
        <span className="form__input-error" id="source_link-input-error">
          {linkError}
        </span>
      </div>
    </PopupWithForm>
  );
};
