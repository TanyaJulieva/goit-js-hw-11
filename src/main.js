import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImages from "./js/pixabay-api.js"


const elem = {
    input: document.querySelector('.input-js'),
    form: document.querySelector('.form-js')
}



const key = '42470360-53d39d66a700555aa13e5c54c';
const baseUrl = 'https://pixabay.com/api/';
const query = elem.input.value;
const link = `${baseUrl}?key=${key}&q=${query}&image_type="photo"&orientation="horizontal"&safesearch="true"`

console.log(getImages());
