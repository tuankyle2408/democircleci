class Login {
  btnLogin = "#login2";
  txtUsername = "#loginusername";
  txtPassword = "#loginpassword";
  btnSubmit =
    "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary";
  checkLoginSuccess = "#nameofuser";
  clickLoginButton() {
    cy.get(this.btnLogin).click();
  }
  setUserName(username) {
    cy.get(this.txtUsername).type(username).wait(500);
  }

  setPassWord(password) {
    cy.get(this.txtPassword).type(password).wait(500);
  }

  clickSubmit() {
    cy.get(this.btnSubmit).click().wait(1000);
  }
  verifyLoginPage() {
    cy.get(this.checkLoginSuccess).should("have.text", "Welcome TuanHT3");
  }
}
export default Login;
