
// NAVBAR ANIMADO

const list = document.querySelectorAll('.list');

function activeLink(){
list.forEach((item) =>
item.classList.remove('active'));

this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click',activeLink));


// MENÚ SOCIAL

const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

menuToggle.onclick = function(){
menu.classList.toggle("active");
}