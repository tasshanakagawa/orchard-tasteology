/**
 * @file gallery.js
 * @description Renders a gallery section with an image grid, content, and
 * a modal on image click
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
      <div class="gallery__image" role="button" tabindex="0">
        <img src="${src}" alt="${grid.alt}" />
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

    <!-- Modal -->
    <div class="gallery__modal hidden" role="dialog" aria-modal="true" aria-label="Image Preview">
      <div class="gallery__modal-wrapper">
        <span class="gallery__modal-close" aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </span>
        <div class="gallery__modal-image">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  `;

  // Append the html to the container
  container.innerHTML = component;

  // Add modal functionality
  const gridItems = container.querySelectorAll('.gallery__image');
  const modal = container.querySelector('.gallery__modal');
  const modalImage = container.querySelector('.gallery__modal-image img');

  gridItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const image = item.querySelector('img');

      modalImage.src = image.src;
      modalImage.alt = image.alt;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  // Function to close modal
  const closeButton = container.querySelector('.gallery__modal-close');
  const closeModal = (e) => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Close modal on click and esc key
  closeButton.addEventListener('click', closeModal);
  closeButton.addEventListener('keyboard', (e) => {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') {
      closeModal();
    }
  });
}