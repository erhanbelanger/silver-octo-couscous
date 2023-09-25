const fs = require('fs');

function saveSVGFile(svg, text, textColor) {
  // Define the SVG content with user-provided values
  const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${userInput.shapeColor}" />
  <text x="150" y="100" font-size="48" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
</svg>
  `;

  // Write the content to a file named 'logo.svg'
  fs.writeFileSync('logo.svg', svgContent);
}

module.exports = { saveSVGFile };