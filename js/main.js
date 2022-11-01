import {generatePosts} from './data.js';
import {createThumbnailsLayout} from './layout.js';
import { hideEditImageForm, showEditImageForm } from './form.js';

const posts = generatePosts();
createThumbnailsLayout(posts);

const imgUploader = document.querySelector('#upload-file');
imgUploader.addEventListener('change', showEditImageForm);

const closeImgEditBtn = document.querySelector('#upload-cancel');
closeImgEditBtn.addEventListener('click', hideEditImageForm);
document.addEventListener('keydown', (evt)=>{
  if (evt.key === 'Escape'){
    hideEditImageForm();
  }
});
