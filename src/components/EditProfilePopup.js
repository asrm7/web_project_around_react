import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isPatching, setIsPatching] = React.useState(false);
  
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsPatching(true);
    onUpdateUser({
      name,
      about: description,
    }).finally(() => {
      setIsPatching(false);
    });
  }

  return (
    <PopupWithForm
      title="Edit profile"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      textBtn={isPatching ? "Salvando..." : "Salvar"}
      
      
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
