/* eslint-disable no-undef */
import init from '../modules/map.js';
class Layout {
  constructor() {
    ymaps.ready(init)
  }
}

new Layout();


