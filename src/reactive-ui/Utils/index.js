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

export {debounce, throttle};