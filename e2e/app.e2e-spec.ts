import { NgxAdminLtePage } from './app.po';

describe('ngx-admin-lte App', () => {
  let page: NgxAdminLtePage;

  beforeEach(() => {
    page = new NgxAdminLtePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
