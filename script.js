const social = document.querySelector('.social');
const shareBtn = document.querySelector('.share');

shareBtn.addEventListener('click', () => {
    social.classList.toggle('clicked'); 
});