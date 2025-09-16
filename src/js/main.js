// Styles
import '../styles/main.scss';

// Assets
import '../assets/favicon.ico';

// Components
import { createGallery } from '../components/gallery/gallery.js';
import { createCards } from '../components/cards/cards.js';

// Initialize components
createGallery('.gallery');
createCards('.cards');