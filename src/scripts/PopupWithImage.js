import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.handleCardClick = this.handleCardClick.bind(this);
  }
  handleCardClick(name, link) {
    this._showImage = document.querySelector(".popup__fullImg");
    this._showSubtitle = document.querySelector(".popup__footer");
    this._showImage.alt = `Fotografia de ${name}`;
    this._showImage.src = link;
    this._showSubtitle.textContent = name;
    super.open();
  }
  close() {
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
  }
}