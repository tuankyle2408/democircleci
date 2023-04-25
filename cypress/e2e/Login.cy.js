import Login from "../PageObjects/LoginPage.js";
describe("Login", () => {
  let userdata;
  before(() => {
    cy.fixture("account.json").then((data) => {
      userdata = data;
    });
  });

  it("isLogin", () => {
    cy.visit("https://www.demoblaze.com");
    const ln = new Login();
    ln.clickLoginButton();
    ln.setUserName(userdata.username);
    ln.setPassWord(userdata.password);
    ln.clickSubmit();
    ln.verifyLoginPage();
  });
});
