import React  from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();
  const [link, setLink] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  const [isPatching, setIsPatching] = React.useState(false);
  React.useEffect(() => {
    setLink(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsPatching(true);
    onUpdateAvatar({
      avatar: avatarRef.current.value, 
    }).finally(() => {
      setIsPatching(false);
    });
  }

  return (
    <PopupWithForm
      title="Alterar a Foto de Perfil"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      textBtn={isPatching ? "Salvando..." : "Salvar"}
      
    >
      <fieldset className="popup__fieldset">
         <input
            className="popup__input"
            id="avatar"
            placeholder="Link da Imagem"
            type="url"
            name="image"
            ref={avatarRef}
            defaultValue={link} 
            required

          />
          <p className="input-link-error popup__error"></p>
      </fieldset>
    </PopupWithForm>
  );
}
