//cibles DOM
const modalbtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalbtn.addEventListener('mouseover', () => {
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open-modal');
});