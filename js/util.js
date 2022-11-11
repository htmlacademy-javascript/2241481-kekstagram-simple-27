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

const MessageType = {
  CONFIRM: 'green',
  FAILED: 'red',
};

const MESSAGE_SHOW_TIME = 3000;
const showMessage = (message, messageType) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = messageType;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, MESSAGE_SHOW_TIME);
};

export {getRandomPositiveInteger, checkMaxStringLength, getRandomArrayItem, showMessage, MessageType};

