import closeButton from "../images/CloseIcon.svg";

export default function PopupWithForm(props) {
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
             props.onSubmit(e);
           }}
         >
           <h3 className="popup__title">{props.title}</h3>
           {props.children}
           <button 
             className="popup__button" 
             type="submit"
            >
             {props.textBtn}
           </button>
         </form>
       </div>
     
    </section>
  );
}