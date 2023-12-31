Cypress.Commands.add("login", (username: string, password: string) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password, { log: false });
});

Cypress.Commands.add("isVisible", { prevSubject: true }, (selector) => {
  cy.get(selector).should("be.visible");
});
