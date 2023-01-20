'use strict';
const openModel = function (openModel) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function (closeModel) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel);
for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener('click', openModel);
btnClosemModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
