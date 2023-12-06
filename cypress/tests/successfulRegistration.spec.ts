import { loginPage, userKB } from "../pages/LoginPage";
import { registerPage } from "../pages/RegisterPage";
import { faker } from "@faker-js/faker";

const { firstName, lastName } = faker.name;
const { userName } = faker.internet;

// const {
//   firstNameInputField,
//   lastNameInputField,
//   usernameInputField,
//   passwordInputField,
//   confirmPasswordInputField,
// } = registerPage;

describe("Registering an account", () => {
  before(() => {
    cy.visit("/signin");
  });

  it("Visits the login page and checks if the -- Dont have an account? Sign Up -- button is available", () => {
    cy.url().should("include", "/signin");
    loginPage.registerAnAccountLink.isVisible();
  });

  it("Navigates to the Account registration page and checks for required page elements and empty inputs error visibility", () => {
    cy.visit("/signin");
    loginPage.registerAnAccountLink.click();
    cy.url().should("include", "/signup");

    registerPage.formInputIds.forEach((inputId: string, index) => {
      cy.get(inputId).isVisible().click().blur();
      const helperText = registerPage.formInputHelperTexts[index];
      cy.contains(helperText).isVisible();
    });
  });

  it.only("Fills out the user registration form and registers a new user", () => {
    cy.visit("/signup");

    // registerPage.formInputIds.forEach((inputId: string, index) => {
    //   cy.get(inputId).type(`${registerPage.formInputValues[index]}`);
    // });

    registerPage.firstNameInputField.type(firstName());
    registerPage.lastNameInputField.type(lastName());
    registerPage.usernameInputField.type(userName());
    registerPage.passwordInputField.type(Cypress.env().defaultPassword, { log: false });
    registerPage.confirmPasswordInputField.type(Cypress.env().defaultPassword, { log: false });
    registerPage.signUpButton.click();
  });
});
