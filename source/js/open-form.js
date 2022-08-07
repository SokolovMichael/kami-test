import {isEscapeKey} from './utils/is-escape-key.js';

const openModalWindowButton = document.querySelector('.nav__list-button');
const modal = document.querySelector('.modal');
const closeModalWindowButton = document.querySelector('.modal__button');

const onModalWindowClose = () => {
  modal.classList.remove('modal--opened');
  closeModalWindowButton.removeEventListener('click', onModalWindowClose);
  openModalWindowButton.addEventListener('click', onModalWindowOpen);
  document.removeEventListener('keydown', onModalWindowEscKeydown);
};

const onModalWindowOutsideClickClose = (evt) => {
  if (!document.querySelector('.modal__wrapper').contains(evt.target)) {
    if (evt.target.className !== 'nav__list-button') {
      onModalWindowClose();
      document.removeEventListener('click', onModalWindowOutsideClickClose);
    }
  }
};

const onModalWindowEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onModalWindowClose();
    document.removeEventListener('keydown', onModalWindowEscKeydown);
  }
};

const onModalWindowOpen = () => {
  modal.classList.add('modal--opened');
  openModalWindowButton.removeEventListener('click', onModalWindowOpen);
  closeModalWindowButton.addEventListener('click', onModalWindowClose);
  document.addEventListener('keydown', onModalWindowEscKeydown);
  document.addEventListener('click', onModalWindowOutsideClickClose);
};

const openForm = () => {
  openModalWindowButton.addEventListener('click', onModalWindowOpen);
};

export {openForm};
