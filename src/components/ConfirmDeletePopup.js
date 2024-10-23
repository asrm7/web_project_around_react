import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function ConfirmDeletePopup({
  isOpen,
  onClose,
  onConfirmDelete,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirmDelete(); 
  }

  return (
    <PopupWithForm
      name="PopUp-Delete"
      title="Confirmação de exclusão"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      intextBtn="Sim"
      outtextBtn="Excluindo..."
    >
      
    </PopupWithForm>
  );
}
