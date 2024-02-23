const elem = {
  input: document.querySelector('.input-js'),
  form: document.querySelector('.form-js'),
  list: document.querySelector('.gallery-js'),
};

function getImages() {
  const key = '42470360-53d39d66a700555aa13e5c54c';
  const baseUrl = 'https://pixabay.com/api/';
  const query = elem.input.value;
  const link = `${baseUrl}?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(link)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error('Image error!');
      }
      return response.json();
    })
    .catch(error => {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
      });
    });
}

export { getImages };
