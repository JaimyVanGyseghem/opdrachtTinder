import '../styles/main.css'
import './app.js';
import './addDom';

import {info} from './app';

let gender = prompt('Do your partner needs to be a male or a female?').toLowerCase();

const api = 'https://randomuser.me/api/?results=10&gender=' + gender;

export function getAPerson() {
  info.innerHTML = '';
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', api);
  xhr.send();
  xhr.onerror = () => {
    console.log('jammer kameraad, het is niet gelukt');
  }
  xhr.onprogress = () => {
    console.log('wachteuuuuh');
  }
  xhr.onload = () => {
    console.log('succes');
    let status = xhr.status;
    console.log(status)
    if (status == 200) {
      let result = xhr.response;
      console.log(result);
      addToDOM(result);
    } else {
      console.log('nope');
    }
  }
}

import {addToDOM} from './addDom';