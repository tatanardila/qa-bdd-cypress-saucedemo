describe("Ping", () => {
  it("loads home", () => {
    cy.visit("/index.html");
    cy.title().should("exist");
  });
});