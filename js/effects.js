const imagePreview = document.querySelector('.img-upload__preview img');
const effectItemsContainer = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevel = document.querySelector('.effect-level');

let currentEffect;
const EffectClassName = {
  NONE: 'effects__preview--none',
  CHROME: 'effects__preview--chrome',
  SEPIA: 'effects__preview--sepia',
  MARVIN: 'effects__preview--marvin',
  PHOBOS: 'effects__preview--phobos',
  HEAT: 'effects__preview--heat'
};

const DEFAULT_EFFECT_NAME = EffectClassName.NONE;
const effectsMap = {
  [EffectClassName.NONE]: {
    min: 0,
    max: 0,
    step: 0,
    style: '',
    units: '',
  },
  [EffectClassName.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    units: '',
  },
  [EffectClassName.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    units: '',
  },
  [EffectClassName.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    units: '%',
  },
  [EffectClassName.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    units: 'px',
  },
  [EffectClassName.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    units: '',
  }
};

const resetSlider = (effectName = DEFAULT_EFFECT_NAME) => {
  if (effectName === DEFAULT_EFFECT_NAME){
    effectLevel.classList.add('hidden');
    return;
  }

  const effect = effectsMap[effectName];
  effectLevel.classList.remove('hidden');
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
  imagePreview.style.filter = '';

  if (effect === 'undefined'){
    imagePreview.classList.add(EffectClassName.NONE);
  } else {
    imagePreview.classList.add(effect);
  }
};

const effectChangeHandler = (evt) => {
  currentEffect = `effects__preview--${evt.target.value}`;
  applyEffect(currentEffect);
  resetSlider(currentEffect);
};

const updateSliderHandler = () => {
  if (!currentEffect){
    currentEffect = DEFAULT_EFFECT_NAME;
    return;
  }

  const effect = effectsMap[currentEffect];
  const value = sliderElement.noUiSlider.get();
  imagePreview.style.filter = `${effect.style}(${value}${effect.units})`;
  effectLevelValue.value = value;
};

const initEffects = () => {
  noUiSlider.create(sliderElement, {
    start: 100,
    connect: 'lower',
    range: {
      'min': 0,
      'max': 1
    },
    step: 1
  });

  sliderElement.noUiSlider.on('update', updateSliderHandler);

  currentEffect = DEFAULT_EFFECT_NAME;
  imagePreview.classList.add(DEFAULT_EFFECT_NAME);
  effectItemsContainer.addEventListener('change', effectChangeHandler);
  resetSlider(DEFAULT_EFFECT_NAME);
};

export {initEffects, applyEffect, resetSlider};
