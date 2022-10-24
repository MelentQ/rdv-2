import Fancybox from "@fancyapps/ui";

import forms from "./forms";
import lockForm from "./lockForm";
import masks from "./masks";
import modals from "./modals";
import phoneCodes from "./phoneCodes";
import validation from "./validation";
import showHide from "./showHide";
import videoSlider from "./videoSlider";
import tabs from "./tabs";
import gallery from "./gallery";
import sticky from "./sticky";
import numberedListLine from "./numberedListLine";

document.addEventListener('DOMContentLoaded', function () {
  window.rdv = {
    info: "Функции для вызова на беке",
    isAdmin: document.body.classList.contains('is-admin')
  };
  
  masks();
  validation();
  
  forms();
  lockForm();
  phoneCodes();
  modals();
  showHide();
  videoSlider();
  tabs();
  gallery();
  sticky();
  numberedListLine();
});