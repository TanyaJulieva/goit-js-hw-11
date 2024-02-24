import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elem = {
  input: document.querySelector('.input-js'),
  form: document.querySelector('.form-js'),
  list: document.querySelector('.gallery-js'),
};

function createMarkup(arr) {
       return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
          `<li>
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" width="360">
          </a>
          <div class="actions">
            <div>
              <h2 class="actions-name">Likes</h2>
              <p class="quantity">${likes}</p>
            </div>
            <div>
              <h2 class="actions-name">Views</h2>
              <p class="quantity">${views}</p>
            </div>
            <div>
              <h2 class="actions-name">Comments</h2>
              <p class="quantity">${comments}</p>
            </div>
            <div>
              <h2 class="actions-name">Downloads</h2>
              <p class="quantity">${downloads}</p>
            </div>
          </div>
        </li>`
          )
          .join('');
}
 


export { createMarkup };
