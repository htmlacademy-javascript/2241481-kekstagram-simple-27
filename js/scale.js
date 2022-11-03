const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const scaleElement = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;

const scaleImage = (scale = DEFAULT_SCALE) => {
  imagePreview.style.transform = `scale(${scale / 100})`;
  scaleElement.value = `${scale}%`;
};

const buttonBiggerClickHandler = () => {
  let val = +scaleElement.value.slice(0, -1);
  if (val >= MAX_SCALE - SCALE_STEP){
    val = MAX_SCALE;
  } else{
    val += SCALE_STEP;
  }

  scaleImage(val);
};

const buttonSmallerClickHandler = () => {
  let val = +scaleElement.value.slice(0, -1);
  if (val <= MIN_SCALE){
    val = MIN_SCALE;
  } else {
    val -= SCALE_STEP;
  }

  scaleImage(val);
};

const initImageScaling = () =>{
  scaleElement.value = `${DEFAULT_SCALE}%`;
  buttonBigger.addEventListener('click', buttonBiggerClickHandler);
  buttonSmaller.addEventListener('click', buttonSmallerClickHandler);
};

export {initImageScaling, scaleImage};
