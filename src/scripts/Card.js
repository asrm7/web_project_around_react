import { closeAll, handleEsc } from "./utils.js";

export class Card {
  constructor( item, handleClickCard, userId, handleDeleteCard, handleLikeCard, handleRemoveLike) {
    this._name = item.name;
    this._link = item.link;
    this._id = item._id;
    this._likes = item.likes;
    this._owner = item.owner;
    this._userId = userId;
    this._cardId = item._id;
    this._element = this._getTemplate();
    this._handleClickCard = handleClickCard;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._handleRemovelike = handleRemoveLike;
    
  }
  _getTemplate() {
    return document
      .querySelector(".template__elements")
      .content.querySelector(".elements__container")
      .cloneNode(true);
  }
  _setProperties() {
    this._elementImage = this._element.querySelector(".elements__place-image");
    this._elementName = this._element.querySelector(".elements__text");
    this._likeBtn = this._element.querySelector(".elements__like");
    this._dltBtn = this._element.querySelector(".elements__delete");
    this._imgBtn = this._element.querySelector(".elements__place-image");
    this._fullImg = document.querySelector(".popup__fullImg");
    this._footerimg = document.querySelector(".popup__footer");
    this._elementImage.src = this._link;
    this._elementName.textContent = this._name;
    this._popupImg = document.querySelector("#popup-img");
    if (this._likes.some((item) => item._id === this._userId)) {
      this._likeBtn.classList.toggle("elements__like-active");
    }
    this._likesCounter = this._element.querySelector(".elements__likes-number");
    this._likesCounter.textContent = this._likes.length;
    this._elementImage.alt = this._name;
    this._element.id = `id_${this._cardId}`;
  }

  _handleLike() {
    this._likeBtn.classList.toggle("elements__like-active");
  }
  _changeLikeCounter(newArrayLikes) {
    this._likes = newArrayLikes;
    this._likesCounter.textContent = newArrayLikes.length;
  }
  _handleDelete() {
    this._element.remove();
  }
  handleOpenCard() {
    this.handleCardClick(this._name, this._link);
  }
  _setListeners() {
    
    this._likeBtn.addEventListener("click", () => {
      if (this._likes.some((item) => item._id === this._userId)) {
        this._handleRemovelike(this._cardId).then((cardWithLike) => {
          this._changeLikeCounter(cardWithLike.likes);
        });
        this._likeBtn.classList.toggle("elements__like-active");
      } else {
        this._handleLikeCard(this._cardId).then((cardWithLike) => {
          this._changeLikeCounter(cardWithLike.likes);
        });
        this._likeBtn.classList.toggle("elements__like-active");
      }
    });
    this._dltBtn.addEventListener("click", () => {
      this._handleDeleteCard(this._cardId);
      //this._handleDelete();
    });
    this._imgBtn.addEventListener("click", () => {
      this._handleClickCard(this._link, this._name);
    });
    
  }

  
  generateCard() {
    this._setProperties();
    this._setListeners();
    return this._element;
  }
}
