import { ProbaPage } from './app.po';

describe('proba App', () => {
  let page: ProbaPage;

  beforeEach(() => {
    page = new ProbaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
