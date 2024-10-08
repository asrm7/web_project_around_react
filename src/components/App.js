import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useEffect, useState } from "react";
import ImagePopup from "./ImagePopup";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
}

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
}
  const handleCardClick = (card) => {
    setSelectedCard(card)
}
  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
}
  return (
    
    <><div id="cover"></div>
    <div className="page">
      <Header/>
      <Main
        onEditAvatarClick={handleEditAvatarClick} 
        isEditAvatarPopupOpen={isEditAvatarPopupOpen} 
        onEditProfileClick={handleEditProfileClick} 
        isEditProfilePopupOpen={isEditProfilePopupOpen} 
        onAddPlaceClick={handleAddPlaceClick} 
        isAddPlacePopupOpen={isAddPlacePopupOpen} 
        closeAllPopups={closeAllPopups}
        onCardClick={handleCardClick}
      /> 
        {selectedCard && (
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        )}
      <Footer/>
    </div></>
    
  );
}

