export class Ng2AdminLTEPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-admin-lte-app h1')).getText();
  }
}
