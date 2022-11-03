import {scaleImage} from './scale.js';

const body = document.body;
const editImageForm = document.querySelector('.img-upload__overlay');
const imgUploader = document.querySelector('#upload-file');
const closeImgEditBtn = document.querySelector('#upload-cancel');

const closeImgButtonHandler = (cbKeyDown) =>{
  body.classList.remove('modal-open');
  editImageForm.classList.add('hidden');
  imgUploader.value = '';
  document.removeEventListener('keydown', cbKeyDown);
};

const keyDownHandler = (evt) =>{
  if (evt.key === 'Escape'){
    closeImgButtonHandler(keyDownHandler);
  }
};

const imgUploaderChangedHandler = (cbKeyDown) =>{
  body.classList.add('modal-open');
  editImageForm.classList.remove('hidden');
  document.addEventListener('keydown', cbKeyDown);
  scaleImage();
};

const initImageForm = () =>{
  imgUploader.addEventListener('change', () => imgUploaderChangedHandler(keyDownHandler));
  closeImgEditBtn.addEventListener('click', () => closeImgButtonHandler(keyDownHandler));
};

export {initImageForm};
