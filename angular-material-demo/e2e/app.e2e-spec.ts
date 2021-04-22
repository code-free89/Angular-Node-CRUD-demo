import { AngularMaterialDemoPage } from './app.po';

describe('angular-material-demo App', () => {
  let page: AngularMaterialDemoPage;

  beforeEach(() => {
    page = new AngularMaterialDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
