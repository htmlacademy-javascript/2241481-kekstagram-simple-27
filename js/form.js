const body = document.body;
const editImageForm = document.querySelector('.img-upload__overlay');
const imgUploader = document.querySelector('#upload-file');
const closeImgEditBtn = document.querySelector('#upload-cancel');

const hideEditImageForm = () =>{
  body.classList.remove('modal-open');
  editImageForm.classList.add('hidden');
  imgUploader.value = '';
  document.removeEventListener('keydown', keyDownHandler);
};

const keyDownHandler = (evt) =>{
  if (evt.key === 'Escape'){
    hideEditImageForm();
  }
};

const showEditImageForm = () =>{
  body.classList.add('modal-open');
  editImageForm.classList.remove('hidden');
  document.addEventListener('keydown', keyDownHandler);
};

const initImageForm = () =>{
  imgUploader.addEventListener('change', showEditImageForm);
  closeImgEditBtn.addEventListener('click', hideEditImageForm);
};

export {initImageForm};
