import { useState } from "react";
import { PopupWithForm } from "./PopupWithForm";

export const AddPlacePopup = ({isOpen, onClose, onAddPlaceSubmit}) => {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')

  const handleClose = () =>{
    setName('')
    setLink('')
    onClose()
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    onAddPlaceSubmit({name, link})
    onClose()
    setName('')
    setLink('')
  }

  return (
    <PopupWithForm
      name={"card"}
      title={"Новое место"}
      submitButtonText={"Создать"}
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
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
          onChange={(e)=>setName(e.target.value)}
        />
        <span className="form__input-error" id="place_name-input-error"></span>
        <input
          className="form__input form__input_el_second"
          placeholder="Ссылка на картинку"
          id="source_link"
          type="url"
          name="link"
          required
          aria-label="Ссылка на картинку"
          value={link}
          onChange={(e)=>setLink(e.target.value)}
        />
        <span className="form__input-error" id="source_link-input-error"></span>
      </div>
    </PopupWithForm>
  );
};
