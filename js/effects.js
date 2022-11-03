const imagePreview = document.querySelector('.img-upload__preview img');
const effectItemsContainer = document.querySelector('.effects__list');

const applyEffect = (effect) => {
  imagePreview.removeAttribute('class');
  if (effect === 'undefined'){
    imagePreview.classList.add('effects__preview--none');
  } else {
    imagePreview.classList.add(effect);
  }
};

const effectClickHandler = (evt) => {
  if (evt.target.nodeName === 'SPAN'){
    const lst = evt.target.classList;
    const effect = lst[lst.length - 1];
    applyEffect(effect);
  }
};

const initEffects = () => {
  effectItemsContainer.addEventListener('click', (evt) => {effectClickHandler(evt);});
};

export {initEffects, applyEffect};
