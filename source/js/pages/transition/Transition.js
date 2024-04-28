import barba from '@barba/core';
import gsap from 'gsap';

class Transition {
  cover;
  animName = 'page-transition';
  animDuration = 0.5;
  animEase = "power1.in";

  currentPage;
  nextPage;
  currentPageDocument;
  nextPageDocument;

  init() {
    this.cover = document.querySelector('.page-transition-cover');

    barba.init({
      transitions: [{
        name: this.animName,
        leave: this.leave,
        afterEnter: this.afterEnter,
      }]
    });
  }

  leave = () => this.animateLeave();

  afterEnter = ({current, next}) => {
    scrollTo(0, 0);
    this.currentPage = current;
    this.currentPageDocument = this.stringToHtml(current.html);
    this.nextPage = next;
    this.nextPageDocument = this.stringToHtml(next.html);

    if (!this.isPageStyleInjected()) {
      this.injectPageStyle();
    }

    if (!this.isPageScriptInjected()) {
      this.injectPageScript();
    } else {
      this.removePageScript();
      this.injectPageScript();
    }

    this.updatePageHeader();
    this.animateEnter();
  }

  animateLeave = () => {
    return gsap.fromTo([this.cover], {
      translateX: '-100%',
      duration: this.animDuration,
    }, {
      translateX: 0,
      ease: this.animEase,
    });
  }

  animateEnter = () => {
    gsap.to([this.cover], {
      translateX: '100%',
      duration: this.animDuration,
      ease: this.animEase,
    });
  }

  updatePageHeader = () => {
    const header = document.querySelector('.page-header');
    header.classList.remove(`page-header--${this.currentPage.namespace}`);
    header.classList.add(`page-header--${this.nextPage.namespace}`);
    header.innerHTML = this.nextPageDocument.querySelector('.page-header').innerHTML;
  }

  isPageStyleInjected = () => !!this.findPageStyle(document);

  isPageScriptInjected = () => !!this.findPageScript(document);

  removePageScript = () => this.findPageScript(document).remove();

  injectPageStyle = () => {
    const style = this.findPageStyle(this.nextPageDocument);
    document.head.appendChild(this.clone(style));
  }

  injectPageScript = () => {
    const script = this.findPageScript(this.nextPageDocument);
    document.body.appendChild(this.clone(script));
  }

  findPageStyle = (document) => {
    return this.find(document.querySelectorAll('[rel="stylesheet"]'));
  }

  findPageScript = (document) => {
    return this.find(document.querySelectorAll('script'));
  }

  stringToHtml = (string) => {
    const html = document.createElement('html');
    html.innerHTML = string.trim();
    return html;
  }

  find = (arr) => {
    const regex = new RegExp('\\b' + this.nextPage.namespace + '\\b');
    return Array.from(arr).find((item) => {
      if (item?.src) return !!item.src.match(regex);
      if (item?.href) return !!item.href.match(regex);
    });
  }

  clone = (item) => {
    let clone;

    if (item?.src) {
      clone = document.createElement('script');
      clone.src = item.getAttribute('src');
    }

    if (item?.href) {
      clone = document.createElement('link');
      clone.rel = item.getAttribute('rel');
      clone.href = item.getAttribute('href');
    }

    return clone;
  }
}

new Transition().init();
