export const Main = () => {

  const handleEditAvatarClick = () =>{
    document.querySelector('.popup_type_avatar').classList.add('popup_opened')
  }

  const handleEditProfileClick = () =>{
    document.querySelector('.popup_type_profile').classList.add('popup_opened')
  }

  const handleAddPlaceClick = () =>{
    document.querySelector('.popup_type_card').classList.add('popup_opened')
  }


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="Ваша аватарка" />
          <button
            type="button"
            aria-label="edit-avatar"
            className="profile__avatar-edit-button"
            onClick={handleEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Кнопка редактировать"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__job">Исследователь океана</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Кнопка добавить"
          value=" "
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section
        className="elements"
        aria-label="Картиночки красивых мест"
      ></section>
    </main>
  );
};
