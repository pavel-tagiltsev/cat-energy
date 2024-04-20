import Page from "./class/Page.js";

class Form extends Page {
  constructor() {
    super();
  }

  init() {
    console.log('Form init')
  }
}

new Form().init();
