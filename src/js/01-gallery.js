import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function createMarkup(galleryItems) {
  return galleryItems
    .map(galleryItem => {
      return `<a class="gallery__item" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}"
      />
    </a>`;
    })
    .join('');
}

const container = document.querySelector('.gallery');
const imagesMarkup = createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', imagesMarkup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
