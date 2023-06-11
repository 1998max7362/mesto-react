import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { PopupWithForm } from "./components/Popups/PopupWithForm";
import { ImagePopup } from "./components/Popups/ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
    addKeyDownListener();
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
    addKeyDownListener();
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
    addKeyDownListener();
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
    removeKeyDownListener();
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    addKeyDownListener();
  };

  const handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  };

  const addKeyDownListener = () => {
    document.addEventListener("keydown", handleEscClose);
  };

  const removeKeyDownListener = () => {
    document.removeEventListener("keydown", handleEscClose);
  };

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <template id="element"></template>
        <PopupWithForm
          name={"approve"}
          title={"Вы уверены?"}
          submitButtonText={"Да"}
          isOpen={false}
          onClose={closeAllPopups}
        ></PopupWithForm>
        <PopupWithForm
          name={"profile"}
          title={"Редактировать профиль"}
          submitButtonText={"Сохранить"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__input-container">
            <input
              className="form__input form__input_el_first"
              placeholder="Имя"
              id="profile_name"
              type="text"
              name="name"
              aria-label="Имя"
              required
              minLength="2"
              maxLength="40"
            />
            <span
              className="form__input-error"
              id="profile_name-input-error"
            ></span>
            <input
              className="form__input form__input_el_second"
              placeholder="Предназначение"
              id="Job"
              type="text"
              name="about"
              aria-label="Предназначение"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="form__input-error " id="Job-input-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm
          name={"avatar"}
          title={"Обновить аватар"}
          submitButtonText={"Сохранить"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__input-container">
            <input
              className="form__input form__input_el_second"
              placeholder="Ссылка на картинку"
              id="avatar-source_link"
              type="url"
              name="avatar"
              required
              aria-label="Ссылка на картинку"
            />
            <span
              className="form__input-error"
              id="avatar-source_link-input-error"
            ></span>
          </div>
        </PopupWithForm>
        <PopupWithForm
          name={"card"}
          title={"Новое место"}
          submitButtonText={"Создать"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
            />
            <span
              className="form__input-error"
              id="place_name-input-error"
            ></span>
            <input
              className="form__input form__input_el_second"
              placeholder="Ссылка на картинку"
              id="source_link"
              type="url"
              name="link"
              required
              aria-label="Ссылка на картинку"
            />
            <span
              className="form__input-error"
              id="source_link-input-error"
            ></span>
          </div>
        </PopupWithForm>
        ImagePopup
        <ImagePopup
          name={"img"}
          isOpen={!!Object.keys(selectedCard).length}
          onClose={closeAllPopups}
          card={selectedCard}
        />
      </div>
    </div>
  );
}

export default App;
