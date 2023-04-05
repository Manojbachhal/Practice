function throttler(callback, delay) {
  // write code here
  let isthrotte = false;
  return function () {
    let args = arguments;
    if (!isthrotte) {
      callback.apply(this, args);
      isthrotte = true;
      setTimeout(() => {
        isthrotte = false;
      }, delay);
    }
  };
}

button.addEventListener("click", throttler(callback, delay));
