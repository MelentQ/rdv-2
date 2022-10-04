import forms from "./forms";
import lockForm from "./lockForm";
import masks from "./masks";
import modals from "./modals";
import phoneCodes from "./phoneCodes";
import validation from "./validation";
import showHide from "./showHide";

document.addEventListener('DOMContentLoaded', function () {
  window.rdv = {
    info: "Функции для вызова на беке"
  };
  
  masks();
  validation();
  
  forms();
  lockForm();
  phoneCodes();
  modals();
  showHide();
});