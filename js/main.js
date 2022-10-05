function getPositiveInteger(a, b){
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0){
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = (upper - lower) * Math.random() + lower;

  return Math.floor(result);
}

function checkMaxStringLenght(inputStr, len){
  return inputStr.lenght <= len;
}
