import React from "react";
import edit_avatar from '../images/Vector.png';
import edit_profile from '../images/EditButton.svg';
import add_card from '../images/addButton.svg';
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { useContext } from "react";

export default function Main({
   onEditAvatarClick,
   onEditProfileClick,
   onAddPlaceClick,
   cards,
   onCardClick,
   onCardLike,
   onCardDelete, 
  
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <img
            src={currentUser.avatar}
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
          <h1 className="profile__info">{currentUser.name}</h1>
          <h2 className="profile__title">{currentUser.about}</h2>
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
        <template className="elements">
          {cards.map(card => (
             <Card 
               key={card._id}
               card={card}
               onCardClick={onCardClick} 
               onCardLike={onCardLike}
               onCardDelete={() => onCardDelete(card)} // Abre o popup de confirmacao
             />
          ))}
        </template>
      </section>
    </main>
      
  );
}

 