export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._title = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._title.textContent,
      userAvatar: this._avatar.src,
    };
  }
  setUserInfo(data) {
    if (data){
      this._name.textContent = data.name;
      this._title.textContent = data.about;
      if (data.avatar) {
        this._avatar.src = data.avatar;
      }
      if (data._id) {
        this._userId = data._id;
      }
    }
  }
}