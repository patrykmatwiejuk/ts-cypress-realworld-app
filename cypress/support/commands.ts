import { loginPage } from "../pages/LoginPage";
import { registerPage } from "../pages/RegisterPage";

// Cypress.Commands.add("loginSession", (userCredentials: LoginCredentials) => {
//   const { username, password } = userCredentials;
//   cy.visit("/signin");
//   loginPage.usernameInputField.type(username);
//   loginPage.passwordInputField.type(password, { log: false });
//   loginPage.signInButton.click();
// });

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password, { log: false });
});

Cypress.Commands.add("isVisible", { prevSubject: true }, (selector) => {
  cy.get(selector).should("be.visible");
});
