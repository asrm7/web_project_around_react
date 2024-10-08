import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handleSubmit) {
    super(selector);
    this._handleSubmit = handleSubmit;
    // this.getUserInfo();
    this._formelement = this._popupSelector.querySelector(".popup__form") ;
  }
  getUserInfo(){
    const popupOpen = document.querySelector(this._popupSelector);
    const form = popupOpen.querySelector("form");
    const name = document.querySelector(".profile__info").textContent;
    const about = document.querySelector(".profile__title").textContent;
    const inputValues =  {name, about};
    const inputForms = Array.from(form.elements);
    inputForms.forEach((element) => {
      if (element.name) {
        element.value =  inputValues[element.name];
      }
    });
  }
  getInputValues() {
    const inputValues = {};
    const inputForms = this._formelement.querySelectorAll(".popup__input");
    inputForms.forEach((element) => {
      inputValues[element.name] = element.value;
    });
    console.log(inputValues);
    return inputValues;
  }
  close() {
    super.close();
    this.toggleTextButton();
    
  }
  toggleTextButton(){
    const textButton = this._popupSelector.querySelector(".popup__button");
    let texttoggle = "";
    if (textButton.textContent.trim() === "Salvar"){
      texttoggle = "Salvando...";
    }else if (textButton.textContent.trim() === "Criar"){
      texttoggle = "Criando...";
    }else if (textButton.textContent.trim() === "Salvando..."){
      texttoggle = "Salvar";
    }else if (textButton.textContent.trim() === "Criando..."){
      texttoggle = "Criar";
    }
    textButton.textContent = texttoggle;
  }
  setEventListeners() {
    super.setEventListeners();
    const form = this._popupSelector.querySelector("form");
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
        this.toggleTextButton();
        this._handleSubmit(this.getInputValues());
        this.close();
       
      
    });
  }
}