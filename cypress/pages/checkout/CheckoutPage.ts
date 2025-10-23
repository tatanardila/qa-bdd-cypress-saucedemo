export class CheckoutPage {
  get firstName() { return cy.get("#first-name"); }
  get lastName()  { return cy.get("#last-name"); }
  get postalCode(){ return cy.get("#postal-code"); }
  get continueBtn(){ return cy.get('.btn_primary'); }
  get finishBtn() { return cy.get('.btn_action'); }
  get successMsg(){ return cy.get(".complete-header"); }

  fillForm(data: {firstName:string; lastName:string; postalCode:string}) {
    this.firstName.clear().type(data.firstName);
    this.lastName.clear().type(data.lastName);
    this.postalCode.clear().type(data.postalCode);
  }
}
export const checkoutPage = new CheckoutPage();