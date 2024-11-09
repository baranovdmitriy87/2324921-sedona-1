const buttonSearch = document.querySelector('.button-search')
const modalContainer = document.querySelector('.modal-container')
const modalContainerClose = document.querySelector('.modal-container-close')
const modalCloseButton = document.querySelector('.modal-close-button')

const openModal = () => {
  modalContainerClose.style.display = 'block';
};

const hideModal = () => {
  modalContainerClose.style.display = 'none';
};

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    hideModal()
  }
});

modalCloseButton.onclick = function () {
  hideModal();
};

buttonSearch.onclick = function () {
  openModal();
};
