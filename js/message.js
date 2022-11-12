let successButton;
let errorButton;

const hideSuccessMessage = () => {
  const successElement = document.querySelector('.success');
  if (successElement){
    successElement.remove();
  }
};

const hideErrorMessage = () => {
  const errorElement = document.querySelector('.error');
  if (errorElement){
    errorElement.remove();
  }
};

const successButtonClickHandler = () => {
  hideSuccessMessage();
};

const errorButtonClickHandler = () => {
  hideErrorMessage();
};

const documentKeydownHandler = (evt) => {
  if (evt.key === 'Escape'){
    hideErrorMessage();
    hideSuccessMessage();
    document.removeEventListener('keydown', documentKeydownHandler);
  }
};

const documentClickHandler = (evt) => {
  if (!evt.target.classList.contains('error__inner')
  && !evt.target.classList.contains('success__inner')){
    hideErrorMessage();
    hideSuccessMessage();
    document.removeEventListener('click', documentClickHandler);
  }
};

const showSuccessMessage = () => {
  const messageTemplate = document.querySelector('#success').content;
  const successMessage = messageTemplate.cloneNode(true);
  successButton = successMessage.querySelector('.success__button');
  successButton.addEventListener('click', successButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentClickHandler);
  document.body.append(successMessage);
};

const showErrorMessage = () => {
  const messageTemplate = document.querySelector('#error').content;
  const errorMessage = messageTemplate.cloneNode(true);
  errorButton = errorMessage.querySelector('.error__button');
  errorButton.addEventListener('click', errorButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentClickHandler);
  document.body.append(errorMessage);
};

const showRecieveDataError = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = 'Не удалось загрузить изображения с сервера';
  document.body.append(alertContainer);
};

export {showSuccessMessage, showErrorMessage, showRecieveDataError };
