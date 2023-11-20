const hamburgerButton = document.querySelector('[data-js = "hamburger"]');
console.log(hamburgerButton);
const nav = document.querySelector('nav');
hamburgerButton.addEventListener('click',function(){
    nav.classList.toggle('active');

});