/**
 * Title: Gallery
 * Type: JS Component
 */

import './gallery.scss';

// Create HTML component
export function createGallery() {
  const container = document.querySelector('.gallery');

  // Generate images
  const images = [
    { name: 'stove-pit.jpg', alt: 'Cooking on a stove pit' },
    { name: 'chef.jpg', alt: 'Chef selecting cooking spices on a kitchen counter' },
    { name: 'hard-boiled-eggs.jpg', alt: 'Top view of a tray of cracked eggs showing different levels of doneness' },
  ];

  const generateGrid = images.map(img => {
    const src = require(`../../assets/gallery/${img.name}`);
    return `<div class="gallery__image"><img src="${src}" alt="${img.alt}"></div>`;
  }).join('');

  const component = `
    <div class="container gallery__wrapper">
      <div class="gallery__images">${generateGrid}</div>

      <div class="gallery__content">
        <h2 class="gallery__title">What does cooking mean?</h2>
        <p class="gallery__description">Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>

        <div class="gallery__feature">
          <h3 class="gallery__feature-title">The perfect egg</h3>
          <p class="gallery__feature-description">Keep water between 67 and 68°C for a flavourful, tender yolk</p>
        </div>
      </div>
    </div>
  `;

  // Append the html to the container
  container.innerHTML = component;
}