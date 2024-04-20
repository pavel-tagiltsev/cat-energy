import Page from "./class/Page.js";

class Catalog extends Page {
  constructor() {
    super();
  }

  init() {
    console.log('Catalog init')
  }
}

new Catalog().init();

