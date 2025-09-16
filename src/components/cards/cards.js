/**
 * @file cards.js
 * @description 
 */

// Import component styles
import './cards.scss';

// Import JSON data
import data from '../../data/cards.json';

// Create the component and inject to "cards" container
export const createCards = () => {
  const container = document.querySelector('.cards');

  // Loop through JSON data and generate cards
  const cardItems = data.map(card => {
    const src = require(`../../assets/cards/${card.image}`);

    return `
      <a href="#" target="_blank" rel="noopener noreferrer" class="cards__item">
        <div class="cards__item-image">
          <img src="${src}" alt="${card.alt}" />
        </div>
        <div class="cards__item-content">
          <h3 class="cards__item-title">${card.title}</h3>
          <p class="cards__item-description">${card.description}</p>
        </div>
      </a>
    `;
  }).join('');

  const component = `
    <div class="container">
      <h2 class="cards__title">Taste the Colours</h2>
      <div class="cards__wrapper">
        ${cardItems}
      </div>
    </div>
  `;

  // Append the component to the container
  container.innerHTML = component;

  // Capture link clicks and log to console
  container.addEventListener('click', e => {
    const cardItem = e.target.closest('.cards__item');
    if (!cardItem) return;

    // Prevent default behavior of anchor link for test purposes
    e.preventDefault();

    // Log title of clicked card
    console.log(cardItem.querySelector('.cards__item-title').textContent);
  });
}