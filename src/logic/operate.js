import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  if (operation === '+') {
    return num1.plus(num2);
  } if (operation === '-') {
    return num1.minus(num2);
  } if (operation === 'X') {
    return num1.times(num2);
  } if (operation === String.fromCharCode(247)) {
    return num1.div(num2);
  } if (operation === '%') {
    return num1.mod(num2);
  }
  return null;
};

export default operate;
