import close from "../images/CloseIcon.svg";

export default function PopupWithForm({ name, title, children, isOpen, onClose}) {

  const cssIsOpened = isOpen ? 'popup__show' : '';

  return (
    <div className={`popup popup_${name} ${cssIsOpened}`}>
        <div className="popup__overlay"></div>
        <div className="popup__form">
            <img src={close} alt="Encerrar" className="popup__close-button" onClick={onClose}/>
            <h2 className="form__title">{title}</h2>
            <form className="popup__fieldset" noValidate name={name}>
              {children}
            </form>
        </div>
    </div>
  )
}