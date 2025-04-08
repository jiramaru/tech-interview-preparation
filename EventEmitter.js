// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.

export default class EventEmitter {
  constructor() {
     this.events = {};
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
     if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(listener);
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  off(eventName) {
        if (!this.events[eventName]) return;

    this.events[eventName] = this.events[eventName].filter(listener => listener !== listenerToRemove);
  }
  /**
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(event, ...args) {
    if (!this.events[event]) return;

    for (const listener of this.events[event]) {
      listener(...args);
    }
  }
}
