const body = document.querySelector('body');
const editImageForm = document.querySelector('.img-upload__overlay');
const imgUploader = document.querySelector('#upload-file');

const showEditImageForm = ()=>{
  body.classList.add('modal-open');
  editImageForm.classList.remove('hidden');
};

const hideEditImageForm = ()=>{
  body.classList.remove('modal-open');
  editImageForm.classList.add('hidden');
  imgUploader.value = '';
};

export {
  showEditImageForm,
  hideEditImageForm};
