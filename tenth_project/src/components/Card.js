export const Card = ({name,link, onCardClick}) => {


  return (
    <div className="element">
      <img className="element__img" alt="Заглушка" src={link} onClick={onCardClick}/>
      <div className="element__info">
        <h2 className="element__name">{name}</h2>
        <div>
          <button
            className="element__like-button"
            aria-label="Кнопка лайк"
            type="button"
            value=" "
          ></button>
          <p className="element__like-counter"></p>
        </div>
      </div>
      <button
        className="element__remove-button"
        aria-label="Кнопка удалить"
        type="button"
        value=" "
      ></button>
    </div>
  );
};
