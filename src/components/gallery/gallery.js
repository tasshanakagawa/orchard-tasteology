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
        <button class="gallery__modal-close" aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </button>
        <div class="gallery__modal-image">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  `;

  // Append the html to the container
  container.innerHTML = component;

  // Modal
  const gridItems = container.querySelectorAll('.gallery__image');
  const modal = container.querySelector('.gallery__modal');
  const modalImage = container.querySelector('.gallery__modal-image img');

  // Focus trapping
  const focusableElements = modal.querySelectorAll('.gallery__modal-close');
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  const handleFocusTrap = (e) => {
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  };

  // Open modal function
  const openModal = (item) => {
    const image = item.querySelector('img');

    modalImage.src = image.src;
    modalImage.alt = image.alt;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  // Open modal on click and enter
  gridItems.forEach(item => {
    item.addEventListener('click', () => openModal(item));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        openModal(item);

        // Deselect focused element
        document.activeElement.blur();

        // Switch focus to close button
        setTimeout(() => firstFocusable.focus(), 100);

        // Prevent keyboard tabbing outside of modal
        modal.addEventListener('keydown', handleFocusTrap);
      }
    });
  });
 
  // Close modal function
  const closeButton = container.querySelector('.gallery__modal-close');
  const closeModal = (e) => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';

    // Allow keyboard tabbing
    modal.removeEventListener('keydown', handleFocusTrap);
  }

  // Close modal on click
  closeButton.addEventListener('click', closeModal);

  // Close modal on keyboard enter
  closeButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      closeModal();
}
  });

  // Close modal on escape
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') {
      closeModal();
    }
  });
}