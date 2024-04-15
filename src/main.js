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
