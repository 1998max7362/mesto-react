import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Popup } from "./components/Popup";
import { PopupWithForm } from "./components/PopupWithForm ";

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />

        <template id="element">
          <div className="element">
            <img className="element__img" alt="Заглушка" />
            <div className="element__info">
              <h2 className="element__name">Заглушка (название места)</h2>
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
        </template>

        <PopupWithForm
        name={'approve'}
        title={'Вы уверены?'}
        submitButtonText={'Сохранить'}
        ></PopupWithForm>

        {/* <Popup name="approve">
          <form className="form" name="approve" id="approve" noValidate>
            <h2 className="form__name">Вы уверены?</h2>
            <button
              type="submit"
              className="form__save-button"
              aria-label="Сохранить"
            >
              Да
            </button>
          </form>
        </Popup> */}

        <Popup name="profile">
          <form className="form" name="name&job-form" id="name-job" noValidate>
            <h2 className="form__name">Редактировать профиль</h2>
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
            <button
              type="submit"
              className="form__save-button"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </Popup>

        <Popup name={"avatar"}>
          <form className="form" name="avatar-form" id="avatar" noValidate>
            <h2 className="form__name">Обновить аватар</h2>
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
            <button
              type="submit"
              className="form__save-button"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </Popup>

        <Popup name={"card"}>
          <form className="form" name="place-form" id="place" noValidate>
            <h2 className="form__name">Новое место</h2>
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
            <button
              type="submit"
              className="form__save-button"
              aria-label="Создать"
            >
              Создать
            </button>
          </form>
        </Popup>

        <Popup name={"img"}>
          <figure className="img-container">
            <img className="img-container__img" alt="Заглушка" />
            <figcaption className="img-container__caption"></figcaption>
          </figure>
        </Popup>
      </div>
    </div>
  );
}

export default App;
