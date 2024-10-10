import React from "react";
import close from "../images/CloseIcon.svg";

export default function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup popup-img ${card ? 'popup__show' : ''}`}>
        <div className="popup__overlay"></div>
        <div className="popup__form popup__image">
            <img
                src={close}
                alt="Encerrar"
                className="popup__close-button"
                id="close-img"
                onClick={onClose}
            />
            <img src={card.link} alt={card.name} className="popup__fullImg"  />
            <p className="popup__footer">{card.name}</p> 
       </div>
      </div>
    );
  }
