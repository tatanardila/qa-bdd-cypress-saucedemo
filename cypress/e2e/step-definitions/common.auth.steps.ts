import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/login/LoginPage";
import users from "../../fixtures/users.json";

Given('I am logged in as {string}', (userKey: keyof typeof users) => {
  cy.session(userKey, () => {
    const creds = users[userKey];
    loginPage.visit();
    loginPage.fillUsername(creds.username);
    loginPage.fillPassword(creds.password);
    loginPage.submit();
    cy.url().should("include", "/inventory.html");
  });
  cy.visit("/inventory.html");
});
