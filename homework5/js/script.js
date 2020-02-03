let fifth = document.createElement('li'),
    menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    col = document.querySelectorAll('.column'),
    divPrompt = document.getElementById('prompt');

fifth.innerHTML = 'Пятый пункт';
fifth.classList.add('menu-item');
menu.appendChild(fifth);
menu.insertBefore(menuItem[2], menuItem[1]);
document.body.style.background = 'url("img/apple_true.jpg")';
title.innerHTML = 'Мы продаем только подлинную технику Apple';
// col[1].removeChild(adv);
adv.remove();

let a = prompt('Как вы относитесь к технике Apple?', '');
divPrompt.innerHTML = a;