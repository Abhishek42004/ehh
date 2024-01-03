
// Logs a message to the console when the file is loaded. Useful for debugging to confirm that the file is executed.
console.log("Loaded : Event");

// Define the ActionEvent class
class ActionEvent {
    // Constructor to initialize the ActionEvent instance
    // client: the object that will handle the events
    // config: configuration object for setting up event listeners
    constructor(config) {
        this.app = null;
        // Store the client reference
        this.listeners = {};
        this.config = config; // Store the configuration
        console.log("%cCalled : Event", "color:blue"); // Log a styled message for debugging
        this.createListeners(this.config.eventConfig); // Set up listeners based on the configuration
    }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);

    }

    async emit(event, data, callback) {
        const eventListeners = this.listeners[event];

        if (eventListeners) {
            let lastResponse;

            await Promise.all(
                eventListeners.map(async (listener) => {
                    // Allow the event handler to return a response

                    lastResponse = await listener(data);
                })
            );

            // If a callback is provided, pass the last response to it
            if (callback) {
                // callback(lastResponse);
                return lastResponse
            }
        }
    }
    // Method to create event listeners from the provided configuration
    // config: an object containing the event configuration
    createListeners(config) {
        // Iterate over each key in the config object
        Object.keys(config).forEach(key => {
            const group = config[key]; // Access the configuration group (e.g., global, specific)
            group.forEach(setting => {
                // Determine the object to which the listener should be attached
                const objectToListenOn = this.getObjectToListenOn(setting.Object2Listen);
                // Check if the 'All' keyword is used to listen to all events
                if (setting.events.includes("All")) {
                    // If 'All', add listeners for all supported event types
                    const allEvents = ["click", "mouseover", "input"]; // Placeholder for all event types
                    allEvents.forEach(event => {
                        objectToListenOn.addEventListener(event, this.handleEvent.bind(this));
                    });
                } else {
                    // Otherwise, add listeners for specified events in the configuration
                    setting.events.forEach(eventName => {
                        objectToListenOn.addEventListener(eventName, this[setting.callback].bind(this));
                    });
                }
            });
        });
        console.log("Activated : Listeners");
    }

    // Helper method to determine the actual object to listen on based on the provided name
    // objectName: name of the object (e.g., 'Window', '#elementId', etc.)
    getObjectToListenOn(objectName) {
        // Check if the name is 'window'; otherwise, use querySelector to find the DOM element
        return objectName.toLowerCase() === 'window' ? window : document.querySelector(objectName);
    }

    // Default event handling method that processes events and returns a JSON representation
    // event: the event object that triggered the listener
    handleEvent(event) {
        if (event.type === "submit") {
            event.preventDefault();
        }

        console.log(`Event ${event.type} triggered`); // Log the event type for debugging
        // Create a JSON object containing event information
        // Extract the data-events attribute
        const callback = event.target.getAttribute(event.type);
        if (callback) {
            event["callback"] = callback
            this.emit("sendRequest", event) // Convert the object to a JSON string and return
        }

    }

    // Method to create and dispatch a new custom event
    // eventName: name of the event to create
    // data: additional data to attach to the event
    createEvent(eventName, data) {
        const event = new Event(eventName); // Create a new event with the given name
        // Attach custom data to the event
        for (const key in data) {
            event[key] = data[key];
        }
        window.dispatchEvent(event); // Dispatch the event on the window object
    }

    // Method to remove an event listener
    // objectToListenOn: name of the object from which to remove the listener
    // eventName: name of the event for which the listener should be removed
    // callback: name of the callback function associated with the listener
    deleteListener(objectToListenOn, eventName, callback) {
        const object = this.getObjectToListenOn(objectToListenOn); // Find the actual object
        object.removeEventListener(eventName, this[callback].bind(this)); // Remove the event listener
    }

    // Method to update an existing event listener with a new callback
    // objectToListenOn: name of the object on which the listener is attached
    // eventName: name of the event for which the listener should be updated
    // oldCallback: name of the current callback function
    // newCallback: name of the new callback function to attach
    updateListener(objectToListenOn, eventName, oldCallback, newCallback) {
        const object = this.getObjectToListenOn(objectToListenOn); // Find the actual object
        this.deleteListener(objectToListenOn, eventName, oldCallback); // Remove the old listener
        object.addEventListener(eventName, this[newCallback].bind(this)); // Add the new listener
    }
}

// Export the ActionEvent class to make it available for import in other files
export { ActionEvent };
