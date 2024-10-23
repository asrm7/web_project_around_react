export default class FormValidator {
  constructor(formConfig, formSelector) {
    this.formConfig = formConfig;
    this.formSelector = formSelector;
  }
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.nextElementSibling.classList.add(
      this.formConfig.inputErrorClass
    );
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.formConfig.errorClass);
  }
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.nextElementSibling.classList.remove(
      this.formConfig.inputErrorClass
    );
    errorElement.classList.remove(this.formConfig.errorClass);
    errorElement.textContent = "";
  }
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this.formConfig.inactiveButtonClass);
      buttonElement.classList.remove(this.formConfig.activeButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this.formConfig.inactiveButtonClass);
      buttonElement.classList.add(this.formConfig.activeButtonClass);
    }
  }
  _setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(this.formConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this.formConfig.submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }
  enableValidation() {
    this.formSelector.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(
      this.formSelector.querySelectorAll(this.formConfig.fieldsetSelector)
    );
    fieldsetList.forEach((fieldset) => {
      this._setEventListeners(fieldset);
    });
  }
  resetValidation() {
    const inputList = Array.from(
      this.formSelector.querySelectorAll(".popup__form-input")
    );
    inputList.forEach((inputElement) => {
      inputElement.nextElementSibling.classList.remove(
        "popup__form-input_error"
      );
      const errorElement = this.formSelector.querySelector(
        `.${inputElement.id}-error`
      );
      errorElement.classList.remove("popup__input-error_active");
      errorElement.textContent = "";
    });
    const buttonElement = this.formSelector.querySelector(
      ".popup__form-button"
    );
    buttonElement.disabled = true;
    buttonElement.classList.add("popup__form-button_disabled");
    buttonElement.classList.remove("popup__form-button_active");
  }
}