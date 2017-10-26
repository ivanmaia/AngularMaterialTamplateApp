import { AngularMaterialApplicationPage } from './app.po';

describe('angular-material-application App', () => {
  let page: AngularMaterialApplicationPage;

  beforeEach(() => {
    page = new AngularMaterialApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
