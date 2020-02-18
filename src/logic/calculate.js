import operate from './operate';

const isNumber = candidate => ['7', '8', '9', '4', '5', '6', '1', '2', '3'].includes(candidate);

const calculate = (calcObject, buttonName) => {
  let { total, next, operation } = calcObject;

  if (isNumber(buttonName)) {
    if (!total) {
      total = buttonName;
    } else if (operation) {
      next = next ? next + buttonName : buttonName;
    } else {
      total = (!next && !operation) ? buttonName : total += buttonName;
    }
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    if (total) {
      total *= -1;
    }
    if (next) {
      next *= -1;
    }
  } else if (buttonName === '.') {
    if (next && !next.includes('.')) {
      next += '.';
    } else if (operation) {
      next = '0.';
    } else if (total && !total.includes('.')) {
      total += '.';
    }
  } else if (buttonName === '=') {
    if (next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (next && operation) {
    total = operate(total, next, operation);
    next = null;
    operation = buttonName;
  } else {
    operation = buttonName;
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
