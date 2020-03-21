import './storage.js';

let content = document.querySelector('#content');
let like = document.querySelector('#like');
let dislike = document.querySelector('#dislike');
export let info = document.querySelector('.info');
let text = document.querySelector('#text');
let photo = document.querySelector('#photo');
let stamp = document.querySelector('#stamp');
let stamp2 = document.querySelector('#stamp2');
let menu = document.querySelector('.menu');

import {likedUsers} from './storage';
import {dislikedUsers} from './storage';
import {getAPerson} from './fetchUser';


dislike.addEventListener('click', function () {
  if (dislikedUsers === null) {
    dislikedUsers = []
  }

  stamp2.style.display = 'block';
  dislikedUsers.push(photo.src);
  localStorage.setItem('dislikedImg', JSON.stringify(dislikedUsers));

  setTimeout(() => {
    if (stamp2.style.display == 'block') {
      stamp2.style.display = 'none';
      getAPerson();
    }
  }, 1500);
})

like.addEventListener('click', function () {
  if (likedUsers === null) {
    likedUsers = []
  }

  stamp.style.display = 'block';
  console.log(likedUsers);
  likedUsers.push(photo.src);
  localStorage.setItem('likedImg', JSON.stringify(likedUsers));
  console.log(likedUsers);

  setTimeout(() => {
    if (stamp.style.display == 'block') {
      stamp.style.display = 'none';
      getAPerson();
    }
  }, 1500);
})

info.addEventListener('click', function () {
  menu.innerHTML = ' ';
  console.log('test')
  content.classList.toggle('contentInvisible');
  menu.classList.toggle('menuShow');

 

  let imgLeft = document.createElement('div');
  let imgRight = document.createElement('div');

  if (likedUsers !== null) {
    let str = imgLeft;
    str.innerHTML = '<h1>liked:</h1>'
    likedUsers.forEach((e) => {
      str.innerHTML += '<img src="' + e + '">';
      menu.appendChild(str);
    });
  } else {
    menu.innerHTML = '<h1>You didnt like or dislike a person</h1>';
  }

  if (dislikedUsers !== null) {
    let str = imgRight;
    str.innerHTML = '<h1>Disliked:</h1>'
    dislikedUsers.forEach((e) => {

      str.innerHTML += '<img src="' + e + '">';
      menu.appendChild(str);
    });
  }

})

document.addEventListener('click', (event) => {
const element = event.target.nodeName;
console.log(element);

});

getAPerson();