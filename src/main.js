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
  loader: document.querySelector('.js-loader'),
};

elem.loader.classList.add('hidden')

elem.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  elem.loader.classList.remove('hidden')
  evt.preventDefault();
 elem.list.childElementCount === 0


  getImages().then(data => {
    const images = data.hits;

    if (images.length === 0) {
      elem.list.childElementCount === 0
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        position: 'bottomCenter',
      });
      return;
    }

    elem.list.innerHTML = createMarkup(images);
    console.dir(elem.list.childElementCount);

    const gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    gallery.refresh()
  });


  evt.currentTarget.reset()
}

