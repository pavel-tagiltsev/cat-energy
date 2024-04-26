import Page from "./class/Page.js";
import SliderBeforeAndAfter from "../modules/example.js";

class Index extends Page {
  constructor() {
    super();
  }

  init() {
    console.log('Index init')
    new SliderBeforeAndAfter().init();
  }
}

new Index().init();
