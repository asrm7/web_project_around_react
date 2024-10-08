import React from 'react';


export default function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
      }
    console.log(card);  
    return (
          
       
            <div className="elements__container" key={card._id}>
                <img className="elements__place-image" src={card.link} alt={card.name} onClick={handleClick} />
                <button className="elements__delete"></button>
                <div className="elements__info">
                    <h3 className="elements__text">{card.name}</h3>
                    <button className="elements__like"></button>
                    <span className="elements__likes-number">{card.likes.length}</span>
                </div>
            </div>
        
      
    );
}

