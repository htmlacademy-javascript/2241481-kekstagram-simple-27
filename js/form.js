import {scaleImage} from './scale.js';
import {applyEffect, resetSlider} from './effects.js';
import {sendData} from './network.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const editImageForm = form.querySelector('.img-upload__overlay');
const submitButton = document.querySelector('.img-upload__submit');
const imgUploader = document.querySelector('#upload-file');
const closeImgEditBtn = document.querySelector('#upload-cancel');

const resetFieldsValues = () => {
  form.reset();
};

const closeModalWindow = (cbKeyDown) =>{
  body.classList.remove('modal-open');
  editImageForm.classList.add('hidden');
  imgUploader.value = '';
  document.removeEventListener('keydown', cbKeyDown);
  resetFieldsValues();
};

const keyDownHandler = (evt) =>{
  if (evt.key === 'Escape'){
    const errorElement = document.querySelector('.error');
    // It should close only error message, but not modal window.
    if (!errorElement){
      closeModalWindow(keyDownHandler);
    }
  }
};

const showModalWindow = (cbKeyDown) =>{
  body.classList.add('modal-open');
  editImageForm.classList.remove('hidden');
  document.addEventListener('keydown', cbKeyDown);
  // set default scale - 100%
  scaleImage();
  // set default effect - none
  applyEffect();
  resetSlider();
};

const disableSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'ПУБЛИКУЮ...';
};
const enableSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'ОПУБЛИКОВАТЬ';
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();

  disableSubmitButton();
  const formData = new FormData(evt.target);
  sendData(
    () => {
      enableSubmitButton();
      closeModalWindow(keyDownHandler);
      showSuccessMessage();
      resetFieldsValues();
    },
    () => {
      enableSubmitButton();
      showErrorMessage();
    },
    formData
  );
};

const initImageForm = () =>{
  imgUploader.addEventListener('change', () => showModalWindow(keyDownHandler));
  closeImgEditBtn.addEventListener('click', () => closeModalWindow(keyDownHandler));
  form.addEventListener('submit', formSubmitHandler);
};

export {initImageForm};
