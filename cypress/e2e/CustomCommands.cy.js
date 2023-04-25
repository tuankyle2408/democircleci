describe("customCommands", () => {
  it.only("handling links", () => {
    cy.visit("https://www.demoblaze.com");
    cy.clickLink("Samsung galaxy s6");
    cy.get(".name").should("have.text", "Samsung galaxy s6");
  });
});
