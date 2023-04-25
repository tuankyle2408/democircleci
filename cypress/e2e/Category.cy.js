const { _ } = Cypress;
let userdata;
  before(() => {
    cy.fixture("category.json").then((data) => {
      userdata = data;
    });
  });
describe("test category", () => {
  it("Select phones category", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.get("[onclick=\"byCat('phone')\"]").click(cy.wait(500));
    cy.get(":nth-child(1) > .card > .card-block > .card-title").should(
      "have.text",userdata.phoneproduct
    );
  });

  it("Select Laptops category", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.get("[onclick=\"byCat('notebook')\"]").click(cy.wait(500));
    cy.get(
      ":nth-child(3) > .card > .card-block > .card-title > .hrefch"
    ).should("have.text", userdata.laptoproduct);
  });

  it("Select Monitors category", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.get("[onclick=\"byCat('monitor')\"]").click(cy.wait(500));
    cy.get(
      ":nth-child(1) > .card > .card-block > .card-title > .hrefch"
    ).should("have.text", userdata.monitorproduct);
  });

  it("Verify the only 'Phone' item showing in the category", () => {
    cy.visit("https://www.demoblaze.com");
    cy.get("#contcont > :nth-child(1) > .col-lg-3")
      .find("[onclick=\"byCat('phone')\"]")
      .should("have.length", 1);
  });

  it("Verify pop-up 'About us' shows successful after clicking", () => {
    cy.visit("https://www.demoblaze.com");

    cy.get(":nth-child(3) > .nav-link").click(cy.wait(500));
    cy.get("#videoModalLabel").should("have.text", userdata.aboutusDisplay);
  });
});
