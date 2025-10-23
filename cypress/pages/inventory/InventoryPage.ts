export class InventoryPage {
  get title() { return cy.get(".product_label, .title"); }
  get items() { return cy.get(".inventory_item"); }
  addItemByName(name: string) {
    cy.contains(".inventory_item", name)
      .within(() => cy.contains("button, .btn_primary", "ADD TO CART").click());
  }
  openCart() { cy.get(".shopping_cart_link, [data-test='shopping-cart-link']").click(); }
}
export const inventoryPage = new InventoryPage();