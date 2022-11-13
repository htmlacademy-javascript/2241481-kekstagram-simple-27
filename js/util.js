const getRandomPositiveInteger = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0){
    return NaN;
  }

  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = (upper - lower) * Math.random() + lower;

  return Math.floor(result);
};

const getRandomArrayItem = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

const checkMaxStringLength = (inputStr, maxLength) =>
  inputStr.length <= maxLength;

export {
  getRandomPositiveInteger,
  checkMaxStringLength,
  getRandomArrayItem,
};

