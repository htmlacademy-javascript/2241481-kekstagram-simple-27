const imagePreview = document.querySelector('.img-upload__preview img');
const effectItemsContainer = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');

let currentEffect;
const DEFAULT_EFFECT_NAME = 'effects__preview--none';
const EFFECTS_MAP = {
  'effects__preview--none': {
    min: 0,
    max: 0,
    step: 0,
    style: '',
    units: '',
  },
  'effects__preview--chrome': {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    units: '',
  },
  'effects__preview--sepia': {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    units: '',
  },
  'effects__preview--marvin': {
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    units: '%',
  },
  'effects__preview--phobos': {
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    units: 'px',
  },
  'effects__preview--heat': {
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    units: '',
  }
};

noUiSlider.create(sliderElement, {
  start: 100,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1
  },
  step: 1
});

const resetSlider = (effectName = DEFAULT_EFFECT_NAME) => {
  if (effectName === DEFAULT_EFFECT_NAME){
    sliderElement.classList.add('hidden');
    return;
  }

  const effect = EFFECTS_MAP[effectName];
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range:{
      min: effect.min,
      max: effect.max
    },
    step: effect.step,
    start: effect.max
  });
};

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
    currentEffect = lst[lst.length - 1];
    applyEffect(currentEffect);
    resetSlider(currentEffect);
  }
};

const updateSliderHandler = () => {
  if (typeof currentEffect === 'undefined'){
    currentEffect = DEFAULT_EFFECT_NAME;
    return;
  }

  const effect = EFFECTS_MAP[currentEffect];
  const value = sliderElement.noUiSlider.get();
  imagePreview.style.filter = `${effect.style}(${value}${effect.units})`;
};

sliderElement.noUiSlider.on('update', updateSliderHandler);

const initEffects = () => {
  currentEffect = DEFAULT_EFFECT_NAME;
  imagePreview.classList.add(DEFAULT_EFFECT_NAME);
  effectItemsContainer.addEventListener('click', (evt) => {effectClickHandler(evt);});
  resetSlider(DEFAULT_EFFECT_NAME);
};

export {initEffects, applyEffect, resetSlider};
