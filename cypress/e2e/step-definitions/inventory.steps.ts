import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I add {string} to the cart', (itemName: string) => {
  cy.contains(".inventory_item", itemName)
    .within(() => cy.contains("button", "ADD TO CART").click());
});

When('I open the cart', () => {
  cy.get(".shopping_cart_link").click();
});

Then('I should see {string} in the cart', (itemName: string) => {
  cy.contains(".cart_item", itemName).should("be.visible");
});

When('I remove {string} from the cart', (itemName: string) => {
  cy.contains(".cart_item", itemName)
    .within(() => cy.contains("button", "REMOVE").click());
});

Then('I should not see {string} in the cart', (itemName: string) => {
  cy.contains(".cart_item", itemName).should("not.exist");
});

When('I sort products by {string}', (option: string) => {
  cy.get(".product_sort_container").select(option);
});

Then('the product list should be sorted alphabetically', () => {
  const selector = ".inventory_item_name";
  cy.get(selector)
    .then(($els) => Cypress._.map($els, "innerText"))
    .then((names) => {
      const sorted = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).to.deep.equal(sorted);
    });
});
