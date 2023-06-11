import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import { Card } from "./Card";

export const Main = ({ onEditProfile, onAddPlace, onEditAvatar,onCardClick }) => {
  const [userData, setUserData] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const userData = await api.getUserData();
        setUserData(userData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setUserData]);

  useEffect(() => {
    (async () => {
      try {
        const userData = await api.getInitialCards();
        setCards(userData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setCards]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={userData.avatar}
            className="profile__avatar"
            alt="Ваша аватарка"
          />
          <button
            type="button"
            aria-label="edit-avatar"
            className="profile__avatar-edit-button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userData.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Кнопка редактировать"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userData.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Кнопка добавить"
          value=" "
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Картиночки красивых мест">

        {cards.map((card) =>
        <Card key={card._id} 
        name={card.name}
        link={card.link}
        onCardClick={()=>onCardClick(card)}
        />)}

      </section>
    </main>
  );
};