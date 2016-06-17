import { Ng2AdminLTEPage } from './app.po';

describe('ng2-admin-lte App', function() {
  let page: Ng2AdminLTEPage;

  beforeEach(() => {
    page = new Ng2AdminLTEPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-admin-lte works!');
  });
});
