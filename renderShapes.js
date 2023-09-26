Document.addEventListener('DOMContentLoaded', function () {
    const svgContainer = document.getElementById('svg-container');

    function generateSVG() {
        const triangle = new Triangle();
        triangle.setColor('blue');
        const triangleSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        triangleSVG.setAttribute('d', triangle.render());
        triangleSVG.setAttribute('fill', triangle.color);
        svgContainer.appendChild(triangleSVG);

        const circle = new Circle();
        circle.setColor('green');
        const circleSVG = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circleSVG.setAttribute('cx', '150');
        circleSVG.setAttribute('cy', '150');
        circleSVG.setAttribute('r', '100');
        circleSVG.setAttribute('fill', circle.color);
        svgContainer.appendChild(circleSVG);

        const square = new Square();
        square.setColor('white');
        const squareSVG = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        squareSVG.setAttribute('x', '50');
        squareSVG.setAttribute('y', '50');
        squareSVG.setAttribute('width', '100');
        squareSVG.setAttribute('height', '100');
        squareSVG.setAttribute('fill', square.color);
        svgContainer.appendChild(squareSVG);
    }

    generateSVG();
});