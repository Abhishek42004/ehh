class ActionView {

  constructor() {
    this.app = null;
  }

  initialize(app) {
    this.app = app;

    // Subscribe to events

    this.app.actionEvent.on('pushToDom', (updates) => {
      this.updateView(updates)
    });
    this.app.actionEvent.on("updateDom", (updates) => {
      this.replaceView(updates)
    })
    this.app.actionEvent.on('addToDom', (updates) => {
      this.addView(updates)
    });
    this.app.actionEvent.on('removeFromDom', (updates) => {
      this.removeElement(updates)
    });
  }
  /**
   * Updates the DOM based on the provided updates.
   * @param {string|string[]|Object|Object[]} updates - A string of HTML, an array of HTML strings, an object, or an array of objects containing the selector and content to update.
   */
  updateView(updates, noNewPage) {
    console.log(noNewPage);
    if (!noNewPage) {
      document.getElementById("app").innerHTML = " "
    }

    // Check if updates is a string (possible HTML content)
    if (typeof updates === 'string') {
      const processed = ActionView.processHtmlString(updates);
      if (processed) updates = [processed];
      else return;
    }
    // Check if updates is an array of strings (possible array of HTML content)
    else if (Array.isArray(updates) && updates.every(item => typeof item === 'string')) {
      const processed = updates.map(ActionView.processHtmlString).filter(Boolean);
      if (processed.length > 0) updates = processed;
      else return;
    }
    // Check if updates is an object or array of objects, convert to an array for uniform processing
    else if (!Array.isArray(updates)) {
      updates = [updates];
    }
    console.log(updates);
    // Loop through each update object
    for (let i = 0; i < updates.length; i++) {
      // Destructure to get selector and content from the current update object
      const { selector, content } = updates[i];

      // Select all DOM elements matching the selector
      const elements = document.querySelectorAll(selector);

      // Loop through each selected DOM element
      for (let j = 0; j < elements.length; j++) {
        // Update the innerHTML of the current DOM element

        elements[j].innerHTML += content;

      }

    }
    console.log(Date.now());
  }
  replaceView(updates) {
    const processed = ActionView.processHtmlString(updates);
    if (processed) updates = [processed];
    for (let i = 0; i < updates.length; i++) {
      // Destructure to get selector and content from the current update object
      const { selector, content } = updates[i];
      // Select all DOM elements matching the selector
      const elements = document.querySelectorAll(selector);
      // Loop through each selected DOM element
      for (let j = 0; j < elements.length; j++) {
        // Update the innerHTML of the current DOM element
        elements[j].innerHTML = content;

      }

    }

  }

  addView(updates) {
    // Check if updates is a string (possible HTML content)
    if (typeof updates === 'string') {
      const processed = ActionView.processHtmlString(updates);
      if (processed) updates = [processed];
      else return;
    }
    // Check if updates is an array of strings (possible array of HTML content)
    else if (Array.isArray(updates) && updates.every(item => typeof item === 'string')) {
      const processed = updates.map(ActionView.processHtmlString).filter(Boolean);
      if (processed.length > 0) updates = processed;
      else return;
    }
    // Check if updates is an object or array of objects, convert to an array for uniform processing
    else if (!Array.isArray(updates)) {
      updates = [updates];
    }
    console.log(updates);
    // Loop through each update object
    for (let i = 0; i < updates.length; i++) {
      // Destructure to get selector and content from the current update object
      const { selector, content } = updates[i];

      // Select all DOM elements matching the selector
      const elements = document.querySelectorAll(selector);

      // Loop through each selected DOM element
      for (let j = 0; j < elements.length; j++) {
        // Update the innerHTML of the current DOM element

        elements[j].innerHTML += content;

      }

    }
    console.log(Date.now());
  }
  /**
   * Removes the first DOM element matching the provided selector.
   * @param {string} selector - The CSS selector for the element to remove.
   */
  removeElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.parentNode.removeChild(element);
    }
  }
  // Function to process a single HTML string
  static processHtmlString = (htmlString) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    const firstChild = tempDiv.firstElementChild;

    // Check if the first child has a data-router attribute
    if (firstChild && firstChild.hasAttribute('dataRouter')) {
      // If it does, use its value as the selector and the entire HTML as the content
      return { selector: firstChild.getAttribute('dataRouter'), content: tempDiv.innerHTML };
    } else {
      // If not, log an error and return null
      console.error("Error: The provided HTML does not have a dataRouter attribute.");
      return null;
    }
  };

}
export { ActionView }