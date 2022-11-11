import {scaleImage} from './scale.js';
import {applyEffect, resetSlider} from './effects.js';
import {sendData} from './network.js';
import {showMessage, MessageType} from './util.js';


const body = document.body;
const form = document.querySelector('.img-upload__form');
const editImageForm = form.querySelector('.img-upload__overlay');
const submitButton = document.querySelector('.img-upload__submit');
const imgUploader = document.querySelector('#upload-file');
const closeImgEditBtn = document.querySelector('#upload-cancel');
const comment = document.querySelector('.text__description');

const closeModalWindow = (cbKeyDown) =>{
  body.classList.remove('modal-open');
  editImageForm.classList.add('hidden');
  imgUploader.value = '';
  document.removeEventListener('keydown', cbKeyDown);
};

const keyDownHandler = (evt) =>{
  if (evt.key === 'Escape'){
    closeModalWindow(keyDownHandler);
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

const resetFieldsValues = () => {
  comment.value = '';
};

const setImgFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    disableSubmitButton();
    const formData = new FormData(evt.target);
    sendData(
      () => {
        enableSubmitButton();
        onSuccess();
        resetFieldsValues();
        showMessage('Данные отправлены на сервер.', MessageType.CONFIRM);
      },
      () => {
        enableSubmitButton();
        showMessage('Не удалось отправить данные. Пожалуйста, попробуйте ещё раз.', MessageType.FAILED);
      },
      formData
    );
  });
};

const initImageForm = () =>{
  imgUploader.addEventListener('change', () => showModalWindow(keyDownHandler));
  closeImgEditBtn.addEventListener('click', () => closeModalWindow(keyDownHandler));
  setImgFormSubmit(() => closeModalWindow(keyDownHandler));
};

export {initImageForm};
