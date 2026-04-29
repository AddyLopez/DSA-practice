// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      // The given eventName exists in the events object, so push the callback into the array
      this.events[eventName].push(callback);
    } else {
      // The given eventName is new, so create an array at that property with the callback as an element
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    // If an event is defined at the given eventName in the events object,
    // then iterate over the eventName's array of callbacks using for...of loop
    // and invoke each given callback function.
    if (this.events[eventName]) {
      for (let callback of this.events[eventName]) {
        callback();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {}
}

module.exports = Events;
