const EventEmitter = require('events');
const _ = require('lodash');
const usb = require('usb');

const VENDOR_ID = 0x1130;
const PRODUCT_ID = 0x0202;

class PanicButton extends EventEmitter {

  constructor() {
    super();

    this._device = usb.findByIds(VENDOR_ID, PRODUCT_ID);

    if (!this._device) {
      throw 'Panic Button not found';
    }

    this._readButtonState = _.throttle(this._readButtonState, 50);
    this._setupDevice();
  }

  _setupDevice() {
    this._device.open();
    this._readButtonState();
  }

  _readButtonState() {
    this._device.controlTransfer(0xa1, 1, 0x300, 0, 8, (err, data) => {
      if (err) {
        this._readButtonState();
        return;
      }

      const state = data[0];

      if (state === 1) {
        this.emit('pressed');
      }
      
      this._readButtonState();
    });
  }

}

module.exports = PanicButton;
