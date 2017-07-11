import { MailingboardPage } from './app.po';

describe('mailingboard App', () => {
  let page: MailingboardPage;

  beforeEach(() => {
    page = new MailingboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
