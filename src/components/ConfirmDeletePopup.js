import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function ConfirmDeletePopup({
  isOpen,
  onClose,
  onConfirmDelete,
}) {
  const [isPatching, setIsPatching] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsPatching(true);
    onConfirmDelete().finally(() => {
      setIsPatching(false);
    }); 
  }

  return (
    <PopupWithForm
      name="PopUp-Delete"
      title="Confirmação de exclusão"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      textBtn={isPatching ? "Excluindo..." : "Sim"}
      
    >
      
    </PopupWithForm>
  );
}
