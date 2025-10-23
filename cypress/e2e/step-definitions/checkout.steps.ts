import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I have {string} in the cart', (itemName: string) => {
  cy.contains(".inventory_item", itemName)
    .within(() => cy.contains("button,a,input", /add to cart/i).click());
  cy.get(".shopping_cart_link").click();
  cy.contains(".cart_item", itemName).should("be.visible");
});

When('I proceed to checkout', () => {
  cy.get('.checkout_button').click();
});

When('I fill the checkout form with:', (table) => {
  const [data] = table.hashes();
  cy.get("#first-name").clear().type(data.firstName);
  cy.get("#last-name").clear().type(data.lastName);
  if (data.postalCode) cy.get("#postal-code").clear().type(data.postalCode);
});

When('I continue checkout', () => {
  cy.contains('input,button,a', /^continue$/i).scrollIntoView().click();
});

When('I finish the purchase', () => {
  cy.location('pathname').then((p) => {
    if (/checkout-step-one/.test(p)) {
      cy.contains('input,button,a', /^continue$/i).scrollIntoView().click();
    }
  });
  cy.contains('input,button,a', /^finish$/i).scrollIntoView().click();
});

When('I click cancel on the checkout page', () => {
  cy.get('.cart_cancel_link').click();
});

Then('I should see the order success message', () => {
  cy.get('.complete-header').should('contain.text', 'THANK YOU');
});

Then('I should see the error message {string}', (msg: string) => {
  cy.get('h3[data-test="error"]').should('contain.text', msg);
});

Then('I should return to the cart page', () => {
  cy.location('pathname').should('match', /\/(v1\/)?cart\.html$/);
});
