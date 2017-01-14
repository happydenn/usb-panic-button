const PanicButton = require('./');
const panicButton = new PanicButton();

panicButton.on('pressed', () => {
  console.log('button pressed!');
});
