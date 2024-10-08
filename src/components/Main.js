import { useState, useEffect } from "react";
import avatar from '../images/Avatar.jpg';
import edit_avatar from '../images/Vector.png';
import edit_profile from '../images/EditButton.svg';
import add_card from '../images/addButton.svg';
import close_icon from '../images/CloseIcon.svg';
import api from '../utils/api.js'
import PopupWithForm from './PopupWithForm.js';
import Card from "./Card";

export default function Main({onEditAvatarClick, isEditAvatarPopupOpen, onEditProfileClick, isEditProfilePopupOpen, onAddPlaceClick, isAddPlacePopupOpen, closeAllPopups, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then(data => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch((error) => console.log('Erro ao obter dados do usuário:', error));

      api
      .getInitialCards()
      .then(setCards)
      .catch((error) => console.log('Erro ao obter dados dos cartões :', error));
  }, []);
  
  return (
      
        <main>
          <section className="profile">
            <div className="profile__container">
              <img
                  src={userAvatar}
                  alt="imagen de perfil"
                  className="profile__avatar"
                   
              />
              <img
                src={edit_avatar}
                alt="edição da imagem do perfil"
                className="profile__avatar-edit"
                id="profile__avatar-edit" 
                onClick={onEditAvatarClick}
              />
              <h1 className="profile__info">{userName}</h1>
              <h2 className="profile__title">{userDescription}</h2>
              <img
                src={edit_profile}
                alt="botão para editar"
                className="profile__edit" 
                onClick={onEditProfileClick}
              />
              <img
                src={add_card}
                alt="botão de adicionar"
                className="profile__add" 
                onClick={onAddPlaceClick}
              />
            </div>
          </section>
          
            <template className="elements">
              {cards.map(card => (
                <Card key={card._id} card={card} onCardClick={onCardClick} />
              ))}
            </template>
         

          <PopupWithForm name="user" title="Editar Perfil" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
              <input name="name" type="text" className="popup__input"  minLength="2"
                maxLength="40" placeholder="Nome" required/>
              <p className="input-name-error popup__error"></p>
              <input name="about" type="text" className="popup__input"   minLength="2"
                maxLength="200" placeholder="Sobre" required/>
              <p className="input-title-error popup__error"></p>
              <button type="submit"  className="popup__button popup__button-save popup__button_disabled">Salvar</button>
          </PopupWithForm>
          <PopupWithForm name="card" title="Novo Local" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
              <input type="text" className="popup__input" name="name"  minLength="2"
                maxLength="30" placeholder="Título" required/>
              <p className="input-img-error popup__error"></p>
              <input id="link-image" type="url" className="popup__input" name="link" placeholder="Link da Imagem"
                required/>
              <p className="input-link-error popup__error"></p>
              <button type="submit" value="Criar" className="popup__button popup__button-create popup__button_disabled">Criar</button>
          </PopupWithForm>                                                      
          <PopupWithForm name="avatar" title="Alterar a Foto de Perfil" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
              <input
                className="popup__input"
                id="avatar"
                placeholder="Link da Imagem"
                type="url"
                name="image"
                required
              />
              <p className="input-link-error popup__error"></p>
              <button className="popup__button popup__button-save" type="submit">Salvar</button>
          </PopupWithForm>

          
          
          {/*Confirmation PopUp*/}
          <div className="popup" id="popup-delete-confirmation">
            <div className="popup__overlay"></div>
            <div className="popup__container popup__form-confirmation">
              <form name="delete-confirmation-form" className="popup__form-confirmation">
                <img
                  src={close_icon}
                  alt="Encerrar"
                  className="popup__close-button" />
                <h2 className="popup__title popup__message">Tem certeza?</h2>
                <button type="submit" value="submit" className="popup__button">Sim</button>
              </form>
            </div>
          </div>
          
        </main>
      
  );
}

 