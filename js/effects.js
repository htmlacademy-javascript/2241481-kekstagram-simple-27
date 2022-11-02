const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const scaleElement = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;


const enlargeImage = () => {
  let val = +scaleElement.value.slice(0, -1);
  if (val >= MAX_SCALE - SCALE_STEP){
    val = MAX_SCALE;
  } else{
    val += SCALE_STEP;
  }
  imagePreview.style.transform = `scale(${val / 100})`;
  scaleElement.value = `${val}%`;
};

const reduceImage = () => {
  let val = +scaleElement.value.slice(0, -1);
  if (val <= MIN_SCALE){
    val = MIN_SCALE;
  } else {
    val -= SCALE_STEP;
  }

  imagePreview.style.transform = `scale(${val / 100})`;
  scaleElement.value = `${val}%`;
};

const initEffects = () =>{
  scaleElement.value = `${MAX_SCALE}%`;
  buttonBigger.addEventListener('click', enlargeImage);
  buttonSmaller.addEventListener('click', reduceImage);
};

export {initEffects};
