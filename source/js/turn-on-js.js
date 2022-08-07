const nav = document.querySelector('.nav');
const modal = document.querySelector('.modal');

const turnOnJs = () => {
  nav.classList.remove('nav--nojs');
  modal.classList.remove('modal--nojs');
};

export {turnOnJs};
