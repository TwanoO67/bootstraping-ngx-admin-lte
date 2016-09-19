import { browser, element, by } from 'protractor/globals';

export class Ng2AdminLtePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
