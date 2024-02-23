import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const elem = {
  input: document.querySelector('.input-js'),
  form: document.querySelector('.form-js'),
  list: document.querySelector('.gallery-js'),
};


elem.form.addEventListener('submit', handlerSubmit)

function handlerSubmit(evt) {
    evt.preventDefault();

    createMarkup()
}
