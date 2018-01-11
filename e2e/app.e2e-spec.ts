import { SachiNgPage } from './app.po';

describe('sachi-ng App', () => {
  let page: SachiNgPage;

  beforeEach(() => {
    page = new SachiNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
