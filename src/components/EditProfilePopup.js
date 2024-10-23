import React, { useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  
  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Edit profile"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      intextBtn="Salvar"
      outtextBtn="Salvando..."
    >
      <fieldset className="popup__fieldset">
        <input 
          name="name" 
          type="text" 
          className="popup__input"  
          minLength="2"
          maxLength="40" 
          placeholder="Nome" 
          required
          defaultValue={name}
          onChange={handleChangeName}
        />
        <p className="input-name-error popup__error"></p>
        <input 
          name="about" 
          type="text" 
          className="popup__input"   
          minLength="2"
          maxLength="200" 
          placeholder="Sobre" 
          required
          defaultValue={description}
          onChange={handleChangeDescription}
        />
        <p className="input-title-error popup__error"></p>
      </fieldset>
    </PopupWithForm>
  );
}
