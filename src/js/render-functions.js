import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elem = {
  input: document.querySelector('.input-js'),
  form: document.querySelector('.form-js'),
  list: document.querySelector('.gallery-js'),
};

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li>
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" width="360" hight="200" />
        </a>
        <ul class="actions">
            <li class="action">
              <h2 class="actions-name">Likes</h2>
              <p class="quantity">${likes}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Views</h2>
              <p class="quantity">${views}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Comments</h2>
              <p class="quantity">${comments}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Downloads</h2>
              <p class="quantity">${downloads}</p>
            </li>
          </ul>
      </li>`
    )
    .join('');
}

export { createMarkup };
