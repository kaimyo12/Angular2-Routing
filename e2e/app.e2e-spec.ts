import { ARoutesPage } from './app.po';

describe('a-routes App', () => {
  let page: ARoutesPage;

  beforeEach(() => {
    page = new ARoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
