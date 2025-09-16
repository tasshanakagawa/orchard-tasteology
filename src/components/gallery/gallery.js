/**
 * @file gallery.js
 * @description Renders a gallery section with images and content
 */

// Import component styles
import './gallery.scss';

// Import JSON data
import data from '../../data/gallery.json';

// Create the component and inject to "gallery" container
export function createGallery() {
  const container = document.querySelector('.gallery');

  // Generate image grid
  const imageGrid = data.images.map(grid => {
    const src = require(`../../assets/gallery/${grid.image}`);
    
    return `
      <div class="gallery__image">
        <img src="${src}" alt="${grid.alt}">
      </div>
    `;
  }).join('');

  const component = `
    <div class="container gallery__wrapper">
      <div class="gallery__images">${imageGrid}</div>

      <div class="gallery__content">
        <h2 class="gallery__title">${data.title}</h2>
        <p class="gallery__description">${data.description}</p>

        <div class="gallery__feature">
          <h3 class="gallery__feature-title">${data.featureTitle}</h3>
          <p class="gallery__feature-description">${data.featureDescription}</p>
        </div>
      </div>
    </div>
  `;

  // Append the html to the container
  container.innerHTML = component;
}