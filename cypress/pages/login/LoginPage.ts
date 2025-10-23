export class LoginPage {
  visit() {
    cy.visit("/index.html");
  }

  get usernameInput() { return cy.get("#user-name"); }
  get passwordInput() { return cy.get("#password"); }
  get loginButton()   { return cy.get("#login-button"); }
  get errorBanner()   { return cy.get("[data-test='error'], h3[data-test='error']"); }

  fillUsername(value?: string) {
    this.usernameInput.clear();
    if (value) this.usernameInput.type(value);
  }

  fillPassword(value?: string) {
    this.passwordInput.clear();
    if (value) this.passwordInput.type(value);
  }

  submit() { this.loginButton.click(); }
}
export const loginPage = new LoginPage();
