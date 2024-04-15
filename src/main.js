import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { getData } from './js/pixabay-api';
import { renderElements } from './js/render-functions';

const elements = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadButton: document.querySelector('.load-button'),
};

const messages = {
  noMatches() {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#fff',
      backgroundColor: '#EF4040',
      position: 'topRight',
    });
  },
  loadsLimit() {
    iziToast.show({
      message: 'We are sorry, but you have reached the end of search results.',
      messageColor: '#fff',
      backgroundColor: '#0099FF',
      position: 'topRight',
    });
  },
};
const lightboxOptions = {
  captionsData: 'alt',
  captionDelay: 250,
};
const imageModal = new SimpleLightbox('.gallery a', lightboxOptions);

let currentPage = null;
let searchInputValue = null;
