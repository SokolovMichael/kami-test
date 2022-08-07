const tel = document.querySelector('#tel');

const inputTel = () => {
  tel.addEventListener('keypress', (evt) => {
    if (!/[+]/.test(evt.key) && !/[0-9]/.test(evt.key)) {
      evt.preventDefault();
    }
  });
};

export {inputTel};
