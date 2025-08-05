const debounce = (func, delay) => {
  let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
        timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    }
};

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
    return function(...args) {
    if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
    }
    else {
      if (Date.now() - lastRan >= limit) {
        clearTimeout(lastFunc);
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          func.apply(this, args);
          lastRan = Date.now();
        }
        , limit - (Date.now() - lastRan));
      }
    }
  }
};

function separateCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export {debounce, throttle, separateCamelCase};