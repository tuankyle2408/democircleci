//Handling Links
Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click();
});

//Commands for login
// Cypress.Commands.add('login', (username, password) => {})
// Cypress.Commands.addAll({
//   login(username, password) {},
//   visit(orig, url, options) {},
// })
// Cypress.Commands.overwrite('visit', (orig, url, options) => {})
