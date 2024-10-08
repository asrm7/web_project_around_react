export const popUpProfile = document.querySelector("#popup-profile");
export const profileNameInput = document.querySelector("#input-name");
export const profileAboutInput = document.querySelector("#input-title");
export const elementLinkInput = document.querySelector("#input-link");
export const elementNameInput = document.querySelector("#input-img");
export const popUpAdd = document.querySelector("#popup-add");
export const popupImg = document.querySelector("#popup-img");
export const profileName = document.querySelector(".profile__info");
export const profileAbout = document.querySelector(".profile__title");
export const buttonSelector = document.querySelector(".popup__button-create");

export const inputSelector = document.querySelectorAll(".popup__input");
export const btnEdit = document.querySelector(".profile__edit");
export const formProfile = document.querySelector("#profile-form");
export const btnAdd = document.querySelector(".profile__add");
export const elementArea = document.querySelector(".elements");
export const formElements = document.querySelector("#elements-form");
export const popups = document.querySelectorAll(".popup");
export const avatarBtn = document.querySelector("#profile__avatar-edit");
export const formAvatar = document.querySelector("#profile-avatar-form");



export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];



//open close profile profile                              class="input-title-error popup__error"
export function openProfile() {
  popUpProfile.classList.toggle("popup__show");
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
  document.addEventListener("keydown", handleEsc);
}
export function closeAll() {
  popUpProfile.classList.remove("popup__show");
  elementLinkInput.value = "";
  elementNameInput.value = "";
  popUpAdd.classList.remove("popup__show");
  popupImg.classList.remove("popup__show");
  document.removeEventListener("keydown", handleEsc);
  
  inputSelector.forEach(function (el) {
    el.classList.remove("popup__error_visible");
    el.classList.remove("popup__input_type_error");
  });
  buttonSelector.classList.add("popup__button_disabled");
}
export function handleEsc(evt) {
  if (evt.key === "Escape") {
    closeAll();
    console.log("Foi pressionado ESC");
  }
}
export function saveChanges(evt) {
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  evt.preventDefault();
  closeAll();
}
export function openAdd() {
  popUpAdd.classList.add("popup__show");
  document.addEventListener("keydown", handleEsc);
}



