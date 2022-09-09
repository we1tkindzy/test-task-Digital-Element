const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const userMessage = document.getElementById('user-message');
const messageForm = document.querySelector('.modal-message__form');
const modal = document.querySelector('.modal');

const checkValue = (value) => {
  if (value.value === '') {
    value.classList.add('no-valid');
  } else {
    value.classList.remove('no-valid');
  }
};

const initFormValidate = () => {
  messageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    checkValue(inputName);
    checkValue(inputEmail);
    checkValue(userMessage);

    if (inputName.value !== '' && inputEmail.value !== '' && userMessage.value !== '') {
      modal.classList.remove('modal--active');
      alert('Form sent successfully! We will contact you.');
    }
  });
};

export {initFormValidate};
