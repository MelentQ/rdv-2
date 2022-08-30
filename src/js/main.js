import forms from "./forms";
import lockForm from "./lockForm";
import masks from "./masks";
import modals from "./modals";
import phoneCodes from "./phoneCodes";
import validation from "./validation";

document.addEventListener('DOMContentLoaded', function () {
  masks();
  validation();
  
  forms();
  lockForm();
  phoneCodes();
  modals();
});