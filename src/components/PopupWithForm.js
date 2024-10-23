import React, { useState } from 'react';
import closeButton from "../images/CloseIcon.svg";
import FormValidator from "./FormValidator";

export default function PopupWithForm(props) {
  const [buttonText, setButtonText] = useState(props.intextBtn);
  
  const handleClick = () => {
        setButtonText(props.outtextBtn);
 
        setTimeout(() => {
            setButtonText(props.intextBtn);
        }, 2000); // Reverts back to 'Submit' after 2 seconds
  };
  
  return (
    <section
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup__show" : ""
      }`}
      
     >
       
       <div className="popup__form" >
         <img src={closeButton} alt="Pop up close icon" className="popup__close-button" onClick={props.onClose} />  
         <form
           className="popup__fieldset"
           name={props.name}
           onSubmit={(e) => {
            e.preventDefault();
             console.log("Evento onSubmit disparado corretamente");  
             props.onSubmit(e);
           }}
         >
           <h3 className="popup__title">{props.title}</h3>
           {props.children}
           <button 
             className="popup__button" 
             type="submit"
             onClick={handleClick}
            >
             {buttonText}
           </button>
         </form>
       </div>
     
    </section>
  );
}