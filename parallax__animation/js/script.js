const wrapper = document.querySelector('.wrapper');
const parallaxList = document.querySelector('.parallax__list');
const liItem = document.querySelectorAll('.parallax__list>li');
liItem.forEach(item => {
    item.classList.add('layer');
});
wrapper.classList.add('active');
