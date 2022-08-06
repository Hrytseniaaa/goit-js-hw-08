import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

 const gallery = document.querySelector('.gallery')

const galleryItem = galleryItems.map(item => {
    
    return (
        `<a class="gallery__item"
         href=${item.original}>
  <img class="gallery__image" src=${item.preview} 
  alt=${item.description} />
</a>`)
}).join("");

gallery.insertAdjacentHTML('beforeend', galleryItem);


let showing = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt'
});

console.log(galleryItems);
