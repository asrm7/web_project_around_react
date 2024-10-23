import React from "react";
import closeButton from "../images/CloseIcon.svg";

export default function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup popup-img ${card ? 'popup__show' : ''}`} onClick={onClose}>
            
            <div className="popup__form popup__image">
                <img
                    src={closeButton}
                    alt="Encerrar"
                    className="popup__close-button"
                    id="close-img"
                    onClick={onClose}
                />
                <img src={card?.link} alt={`imagem de ${card?.name}`} className="popup__fullImg"  />
                <p className="popup__footer">{card?.name}</p> 
            </div>
      </div>
    );
  }
