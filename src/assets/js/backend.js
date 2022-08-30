document.addEventListener('DOMContentLoaded', () => {
    console.log('backend.js');

    window.onSuccess = (response, form, formData) => {
      debugForm(formData, response.status);
      form.reset();
    }

    window.onError = (response, form, formData) => {
      debugForm(formData, response.status);
    }
});

function debugForm(formData, status) {
  let string = "Данные, которые отправятся на бекенд: \n";
  formData.forEach(function (value, key) {
    string += `${key}: ${value} \n`;
  });

  if (status) {
    string += `Статус: ${status}`;
  }

  alert(string);
}