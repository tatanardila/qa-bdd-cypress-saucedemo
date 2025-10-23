import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/login/LoginPage";

const SEL = {
  user: "#user-name",
  pass: "#password",
  errorBanner: 'h3[data-test="error"]',
};

Given("I am on the login page", () => {
  loginPage.visit();
});

When("I login with username {string} and password {string}", (user: string, pass: string) => {
  loginPage.fillUsername(user);
  loginPage.fillPassword(pass);
  loginPage.submit();
});

When("I type username {string}", (u: string) => {
  cy.get(SEL.user).clear().type(u);
});

When("I type password {string}", (p: string) => {
  cy.get(SEL.pass).clear().type(p);
});

When("I press Enter to submit", () => {
  cy.get(SEL.pass).type("{enter}");
});

Then("I should see the inventory page", () => {
  cy.location("pathname").should("match", /\/(v1\/)?inventory\.html$/);
});

Then("I should see an authentication error", () => {
  cy.get(SEL.errorBanner).should("be.visible");
});

Then("I should see error text {string}", (msg: string) => {
  cy.get(SEL.errorBanner).should("be.visible").and("contain.text", msg);
});

Then("the password input should have type {string}", (typeVal: string) => {
  cy.get(SEL.pass).should("have.attr", "type", typeVal);
});
