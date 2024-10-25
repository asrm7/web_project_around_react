import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useEffect, useState } from "react";
import ImagePopup from "./ImagePopup";
import CurrentUserContext  from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import api from "../utils/api.js";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null)
  const [cardToDelete, setCardToDelete] = useState(null);
  const [currentUser, setCurrentUser] = useState({})

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
}

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  
  
  const handleUpdateUser = async ({ name, about }) => {
    return await api.updateUserProfile(name, about).then((updatedUserData) => {
      setCurrentUser(updatedUserData);
      closeAllPopups();
    });
  };
  
  const handleUpdateAvatar = async ({ avatar }) => {
    return await api.updateAvatar(avatar).then((updatedUserData) => {
      setCurrentUser(updatedUserData);
      closeAllPopups();
    });
  };

  
  const handleAddPlaceSubmit = async ({ link, name }) => {
    return await api.createCard(link, name).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  };

  function handleDeletePopupClick(card) {
    setCardToDelete(card); // Armazena o card que se deseja eliminar
    setisDeletePopupOpen(true); // Abre o popup
  }
  // Obtem os cards iniciais
  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardLike(card) {
    // Verifica se o card recebeu like
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Envía uma pedido a API e obtem os dados atualizados
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.error(`Erro ao dar like/deslike: ${err}`));
  }

  
  const handleCardDelete = () => {
    if (cardToDelete) {
      return api.deleteCard(cardToDelete?._id).then(() => {
        setCards((state) => state.filter((c) => c._id !== cardToDelete._id));
        closeAllPopups();
      });
    }
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
}
  const handleCardClick = (card) => {
    setSelectedCard(card)
}
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setisDeletePopupOpen(false);
}
useEffect(() => {
  api
    .getUserInfo()
    .then((userData) => {
      setCurrentUser(userData); // Armazena os dados do usuario atual
    })
    .catch((err) => {
      console.error(`Erro obtendo os dados do usuario: ${err}`); //Se ha um erro, será exibido no console;
    });
}, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
     <div id="cover"></div>
     <div className="page">
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        ></AddPlacePopup>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <ConfirmDeletePopup
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          onConfirmDelete={handleCardDelete} // Elimina o card quando o usuario confirmar
        ></ConfirmDeletePopup>
        <Header/>
        <Main
          cards={cards}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeletePopupClick} // Abre o popup de confirmacao
        /> 
        <Footer/>
      </div>
    </CurrentUserContext.Provider>
    
  );
}

