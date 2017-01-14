# usb-panic-button

A node.js module for interfacing with the cool-looking USB Panic Button hardware like [this one](https://www.firebox.com/USB-Panic-Button/p1742).

## Installation

```
npm install usb-panic-button
```

## Dependencies

This module needs usb module (which depends on libusb) in order to access the button hardware. On macOS, you can install libusb using homebrew by running:

```
brew install libusb
```

## Getting Started

Initialize a new PanicButton object and attach listeners to its "pressed" event. A simple example is shown below:

```javascript
const PanicButton = require('usb-panic-button');
const panicButton = new PanicButton();

panicButton.on('pressed', () => {
  console.log('button pressed!');
});
```
