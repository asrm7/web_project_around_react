import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function Card({ 
    card, 
    onCardClick,
    onCardLike,
    onCardDelete,
 }) {

    const currentUser = useContext(CurrentUserContext); //Obtem o valor de contexto de CurrentUserContext

    // Verificando se o usuario atual és o propietario do card atual
    const isOwn = card.owner._id === currentUser._id;

    // Criando uma variavel que armazena a `className` para o botao eliminar
    const cardDeleteButtonClassName = `${
      isOwn ? "elements__delete" : "elements__delete_hidden"
    }`;

    // Verifica se o usuario atual deu "like" no cartao
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Cria uma variavel que armazena a `className` para o botao like
    const cardLikeButtonClassName = `elements__like ${
      isLiked ? "elements__like-active" : ""
    }`;

    function handleClick() {
        onCardClick(card);
      }
      function handleLikeClick() {
        onCardLike(card);
      }
    
      function handleCardDelete() {
        onCardDelete(card);
      }  
      
    return (
      <div key={card._id} className="elements__container">
        <img
          className="elements__place-image"
          alt={`imagen de ${card.name}`}
          src={card.link}
          onClick={handleClick} // chama a onCardClick quando a imagem for clicada
        />
        <button
          disabled={!isOwn}
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleCardDelete}
        >
        
        </button>
        <div className="elements__info">
           <p className="elements__text">{card.name}</p>
           <div className="elements__like">
              <button
                type="button"
                className={cardLikeButtonClassName}
                onClick={handleLikeClick}
              ></button>
              <p className="elements__likes-number">{card.likes.length}</p>
           </div>
        </div>
      </div>
          
       
          
      
    );
}

