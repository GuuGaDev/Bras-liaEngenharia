let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}
let header = document.getElementById('header')

widow.addEventListener('scroll',() => {
    if (widow.scrolly>=150) {
        header.style.background = '#191919'
    } else{
        header.style.background = 'transparent'
    }
})