const { getUserInput } = require('./lib/userInput');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { saveSVGFile } = require('./lib/fileUtils');

async function generateSVG() {
  const userInput = await getUserInput();

  // Determine the selected shape (Triangle, Circle, or Square) based on user input
  let selectedShape;
  switch (userInput.shape) {
    case 'triangle':
      selectedShape = new Triangle();
      break;
    case 'circle':
      selectedShape = new Circle();
      break;
    case 'square':
      selectedShape = new Square();
      break;
    default:
      console.log('Invalid shape selected');
      return;
  }

  selectedShape.setColor(userInput.shapeColor);
  const svg = selectedShape.render();

  // Save the SVG to a file
  saveSVGFile(svg, userInput.text, userInput.textColor);
  console.log('Generated logo.svg');
}

generateSVG();







