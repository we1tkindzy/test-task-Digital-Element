import {disableScrolling, enableScrolling} from './scroll-lock';

const openModal = (modal, callback, preventScrollLock) => {
  const activeModal = document.querySelector('.wrapper ~ .modal--active');

  if (activeModal) {
    if (activeModal.dataset.targetModal === modal.dataset.targetModal) {
      return;
    }

    activeModal.classList.remove('modal--active');
  }

  modal.classList.add('modal--active');
  if (!preventScrollLock) {
    disableScrolling();
  }

  if (callback) {
    callback();
  }
};

const closeModal = (modal, callback, preventScrollLock) => {
  modal.classList.remove('modal--active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    setTimeout(enableScrolling, 300);
  }
};

const onEscPress = (evt, modal, callback) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && modal.classList.contains('modal--active')) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

const setModalListeners = (modal, closeCallback, preventScrollLock) => {
  const overlay = modal.querySelector('.modal__overlay');
  const closeBtns = modal.querySelectorAll('.js-close');

  for (let i of closeBtns) {
    i.addEventListener('click', () => {
      closeModal(modal, closeCallback, preventScrollLock);
    });
  }

  overlay?.addEventListener('click', () => {
    closeModal(modal, closeCallback, preventScrollLock);
  });

  document.addEventListener('keydown', (evt) => {
    onEscPress(evt, modal, closeCallback, preventScrollLock);
  });
};

const setupModal = (modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock) => {
  if (modalBtns) {

    modalBtns.forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        if (!noPrevDefault) {
          evt.preventDefault();
        }
        openModal(modal, openCallback, preventScrollLock);
      });
    });
  }

  setModalListeners(modal, closeCallback, preventScrollLock);
};

export {setupModal, openModal, closeModal};
