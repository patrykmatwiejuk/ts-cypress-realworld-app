import { loginPage } from "../pages/LoginPage";

Cypress.Commands.add("loginAs", (userCredentials: LoginCredentials) => {
  const { username, password } = userCredentials;
  cy.visit("/signin");
  loginPage.usernameInputField.type(username);
  loginPage.passwordInputField.type(password, { log: false });
  loginPage.signInButton.click();
});
