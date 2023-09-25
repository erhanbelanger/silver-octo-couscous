class Shape {
    constructor() {
      this.color = 'black'; // Default color
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Implement rendering logic for the shape
    }
  }
  
  class Triangle extends Shape {
    render() {
      // Implement rendering logic for a triangle
    }
  }
  
  class Circle extends Shape {
    render() {
      // Implement rendering logic for a circle
    }
  }
  
  class Square extends Shape {
    render() {
      // Implement rendering logic for a square
    }
  }
  
  module.exports = { Triangle, Circle, Square };