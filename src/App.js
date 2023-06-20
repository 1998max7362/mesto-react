import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { PopupWithForm } from "./components/Popups/PopupWithForm";
import { ImagePopup } from "./components/Popups/ImagePopup";
import { api } from "./utils/Api";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { EditProfilePopup } from "./components/Popups/EditProfilePopup";
import { EditAvatarPopup } from "./components/Popups/EditAvatarPopup";
import { AddPlacePopup } from "./components/Popups/AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUserInfo, setCurrentUserInfo] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const userData = await api.getUserData();
        setCurrentUserInfo(userData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setCurrentUserInfo]);

  useEffect(() => {
    (async () => {
      try {
        const cards = await api.getInitialCards();
        setCards(cards);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setCards]);

  const handleCardLike = async (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUserInfo._id);
    try {
      const newCard = await api.changeLikeCardStatus(card._id, !isLiked);
      setCards((cards) =>
        cards.map((card) => (card._id === newCard._id ? newCard : card))
      );
    } catch (err) {
      console.log("Не удалось изменить лайк", err);
    }
  };

  const handleCardDelete = async (card) => {
    try {
      const response = await api.deleteCard(card._id);
      if (response.message === "Пост удалён") {
        setCards((oldCards) =>
          oldCards.filter((oldCard) => oldCard._id !== card._id)
        );
      }
    } catch (err) {
      console.log("Не удалось удалить карточку", err);
    }
  };

  const handleUpdateUser = async (userInfo) => {
    try {
      const newUserInfo = await api.patchUserData(userInfo);
      setCurrentUserInfo(newUserInfo);
    } catch (err) {
      console.log("Не удалось изменить данные пользователя", err);
    }
  };

  const handleUpdateAvatar = async (avatarLink) => {
    try {
      const newUserInfo = await api.updateAvatar(avatarLink);
      setCurrentUserInfo(newUserInfo);
    } catch (err) {
      console.log("Не удалось изменить аватар пользователя", err);
    }
  };

  const handleAddPlaceSubmit = async (cardInfo) =>{
    try {
      const newCard = await api.postCard(cardInfo);
      setCards([newCard, ...cards])
    } catch (err) {
      console.log("Не удалось добавить карточку", err);
    }
  }

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
        <CurrentUserContext.Provider value={currentUserInfo}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
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
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />
          ImagePopup
          <ImagePopup
            name={"img"}
            isOpen={!!Object.keys(selectedCard).length}
            onClose={closeAllPopups}
            card={selectedCard}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
