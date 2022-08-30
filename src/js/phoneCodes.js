import intlTelInput from 'intl-tel-input';

export default function phoneCodes() {
  if (window.phoneCodesSettings) {
    const inputs = document.querySelectorAll(".js-phone-codes");
    inputs.forEach(input => {
      intlTelInput(input, {
        autoPlaceholder: "aggressive",
        hiddenInput: "full_phone",
        ...window.phoneCodesSettings,
        utilsScript: "assets/js/intl-tel-input/utils.js"
      });
    })
  } else {
    console.warn("Не указаны настройки для телефонных кодов стран!")
  }
}