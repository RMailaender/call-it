import { CallItPage } from './app.po';

describe('call-it App', () => {
  let page: CallItPage;

  beforeEach(() => {
    page = new CallItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
