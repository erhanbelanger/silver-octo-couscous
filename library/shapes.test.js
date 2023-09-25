const { Triangle, Circle, Square } = require('./shapes');

test('Triangle should render correctly', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

const { Triangle, Circle, Square } = require('./shapes');

test('Circle should render correctly', () => {
  const shape = new Circle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
});

const { Triangle, Circle, Square } = require('./shapes');

test('Square should render correctly', () => {
  const shape = new Square();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="white" />');
});
