import { getImages } from './pixabay-api';

const elem = {
  input: document.querySelector('.input-js'),
  form: document.querySelector('.form-js'),
  list: document.querySelector('.gallery-js'),
};

function createMarkup() {
    getImages().then(data => {
        elem.list.innerHTML = data.hits
          .map(({ webformatURL, tags, likes, views, comments, downloads }) => {
            return `<li>
             <img src="${webformatURL}" alt="${tags}">
             <div>
               <h2>Likes</h2>
               <p>${likes}</p>
             </div>
             <div>
               <h2>Views</h2>
               <p>${views}</p>
             </div>
             <div>
               <h2>Comments</h2>
               <p>${comments}</p>
             </div>
             <div>
               <h2>Downloads</h2>
               <p>${downloads}</p>
             </div>
           </li>`;
          })
          .join();
      });
}
 


export { createMarkup };
