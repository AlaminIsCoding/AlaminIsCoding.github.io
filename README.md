# Minimal Portfolio

A clean, minimal portfolio website built with vanilla HTML, CSS, and JavaScript. Features an animated gradient background and a dynamic projects showcase.

## Features

- **Animated Gradient Background** - Smooth, eye-catching gradient animation using WebGL
- **Responsive Design** - Works seamlessly across desktop and mobile devices
- **Dynamic Projects Section** - Easily add and manage projects through a simple JavaScript data file
- **No Dependencies** - Built with vanilla JavaScript, no frameworks required
- **Fast Loading** - Lightweight and optimized for performance

## Project Structure

```
minimal-portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles
├── app.js              # Main application logic
├── gradient.js         # WebGL gradient animation
├── projects.js         # Project data configuration
├── assets/
│   ├── favicon.ico     # Site favicon
│   └── img/            # Project images
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser
- A local development server (optional, but recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AlaminIsCoding/AlaminIsCoding.github.io.git
   ```

2. Navigate to the project directory:
   ```bash
   cd minimal-portfolio
   ```

3. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (with http-server installed)
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

## Customization

### Adding Projects

Edit the `projects.js` file to add your own projects:

```javascript
const projects = [
  {
    title: "Project Name",
    image: "./assets/img/project-screenshot.png",
    github: "https://github.com/username/repo",
    tags: ["JavaScript", "CSS", "HTML"],
  },
];
```

### Personal Information

Update the following in `index.html`:
- Your name in the hero section
- Your tagline/description
- Social media links (Instagram, GitHub, etc.)

### Styling

Modify `style.css` to customize:
- Colors and themes
- Typography (uses Space Grotesk and Inter fonts)
- Layout and spacing
- Animation effects

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- WebGL/ThreeJS (for gradient animation)
- Google Fonts (Space Grotesk, Inter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Md. Al-Amin Rafi**

- GitHub: [@AlaminIsCoding](https://github.com/AlaminIsCoding)

