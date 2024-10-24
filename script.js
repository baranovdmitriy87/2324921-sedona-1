const buttonSearch = document.querySelector('.button-search')
const modalContainer = document.querySelector('.modal-container')
const modalContainerClose = document.querySelector('.modal-container-close')
const modalCloseButton = document.querySelector('.modal-close-button')

const isEscapeKey = (evt) => evt.key === 'Escape';

const openModal = () => {
    modalContainerClose.classList.add('modal-container-close');
    modalContainerClose.style.display = 'block';
};

const closeModal = () => {
    modalContainerClose.classList.remove('modal-container-close');
    modalContainerClose.style.display = 'none';
    document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
  }
}

modalCloseButton.onclick = function () {
  closeModal();
};

buttonSearch.onclick = function () {
  openModal();
};
