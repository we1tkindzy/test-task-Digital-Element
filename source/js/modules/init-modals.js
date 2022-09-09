import {setupModal} from '../utils/modal';

const initModals = () => {
  const modals = document.querySelectorAll('.modal');

  if (!modals) {
    return;
  }

  window.addEventListener('load', () => {
    modals.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
    });

    modals.forEach((modal) => {
      const targetModal = modal.dataset.targetModal;
      const modalBtns = document.querySelectorAll(`[data-modal=${targetModal}]`);
      setupModal(modal, false, modalBtns, false, false, false);
    });
  });
};

export {initModals};
