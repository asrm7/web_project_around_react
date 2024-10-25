import React from "react";
import PopupWithForm from "./PopupWithForm";


export default function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");
  const [isPatching, setIsPatching] = React.useState(false);
  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value); 
  }

  function handleSubmit(e) {
     e.preventDefault();
     setIsPatching(true);
    onAddPlaceSubmit({
      name: title,
      link,
    }).finally(() => {
      setIsPatching(false);
      setTitle("");
      setLink("");
    });
  }

  return (
    <PopupWithForm
      title="Novo Local"
      name="card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      textBtn={isPatching ? "Criando..." : "Criar"}
      
    >
      <fieldset className="popup__fieldset">
         <input
            type="text" 
            className="popup__input" 
            name="name"  
            minLength="2"
            maxLength="30" 
            placeholder="Título" 
            required
            value={title}
            onChange={handleChangeTitle}
          />
          <p className="input-img-error popup__error"></p>
          <input 
           id="link-image" 
           type="url" 
           className="popup__input" 
           name="link" 
            placeholder="Link da Imagem"
            required
            value={link}
            onChange={handleChangeLink}
          />
          <p className="input-link-error popup__error"></p>
      </fieldset>
    </PopupWithForm>
  );
}
