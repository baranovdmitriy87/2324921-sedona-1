const buttonSearch = document.querySelector('.button-search')
const modalContainer = document.querySelector('.modal-container')
// const modalContainerJs = document.querySelector('.modal-container')
const modalCloseButton = document.querySelector('.modal-close-button')

const openModal = () => {
  modalContainer.style.display = 'block';
};

const hideModal = () => {
  modalContainer.style.display = 'none';
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
