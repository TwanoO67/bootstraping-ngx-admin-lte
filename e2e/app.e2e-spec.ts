import { Ng2AdminLtePage } from './app.po';

describe('ng2-admin-lte App', function() {
  let page: Ng2AdminLtePage;

  beforeEach(() => {
    page = new Ng2AdminLtePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
