# Tasteology
This project contains a front-end development test built with **Webpack 5**, **SCSS**, **JavaScript**, and **JSON-driven data**, using a component-based folder structure.

🔗 **Hosted URL**: [View Project on GitHub Pages](https://tasshanakagawa.github.io/orchard-tasteology/)

## 📂 Project Structure

- **/dist** - Compiled and optimized production build *(auto-generated)*
- **/src** - Main source code
  - **/assets** - Images used by components
  - **/components** - Modular JavaScript components  
    - Each component typically includes: 
      - `component.js` - JavaScript logic
      - `component.scss` - Component-specific styles
  - **/js** - Entry points and scripts
    - `main.js` - Main entry file that initializes components
  - **/styles** - Global SCSS stylesheets  
    - `_base.scss` - Base styles (reset and base)
    - `_mixins.scss` - Reusable SCSS mixins
    - `_variables.scss` - Global variables (colors, typography, breakpoints)
    - `main.scss` - Root stylesheet importing all partials
- **package.json** - Project dependencies and scripts  
- **webpack.config.js** - Webpack configuration  
- **README.md** - Documentation and setup instructions

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/tasshanakagawa/orchard-tasteology.git
```

### 2. Install dependencies
```
npm install
```

### 3. Start development server
```
npm run dev
```
This starts a local server at http://localhost:8080

### 4. Build for production
```
npm run build
```

## 🌐 Deployment (GitHub Pages)

### 1. Set homepage field (only once)
In `package.json`, add:
```
"homepage": "https://tasshanakagawa.github.io/orchard-tasteology"
```
This ensures that assets (CSS, JS, images) are referenced correctly in the production build.

### 2. Commit latest changes on the master branch

### 3. Build the project
```
npm run build
```

### 4. Deploy to GitHub Pages
```
npm run deploy
```

This will automatically push the `/dist` build to the `gh-pages` branch, which GitHub Pages uses for hosting.