export default function getImages() {
  return fetch(link)
  .then (response => {
    if (!response.ok) {
      throw new Error('Image error!');
    }
    response.json();
  })
  .catch(error => {
    iziToast.show({
        message: "Sorry, there are no images matching your search query. Please try again!",
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
    });
  })
}
