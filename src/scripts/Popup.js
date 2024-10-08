export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this.setEventListeners();
  }
  open() {
   
    this._popupSelector.classList.add("popup__show");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
   
    this._popupSelector.classList.remove("popup__show");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  setEventListeners() {
   
    const closeButton = this._popupSelector.querySelector(".popup__close-button");
    closeButton.addEventListener("click", () => {
      this.close();
    });

    this._popupSelector.querySelector(".popup__overlay").addEventListener("click", () => {
      this.close();
    });
  }
}