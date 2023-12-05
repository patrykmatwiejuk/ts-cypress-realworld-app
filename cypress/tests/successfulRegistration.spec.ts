import { loginPage, userKB } from "../pages/LoginPage";
import { registerPage } from "../pages/RegisterPage";
import { faker } from "@faker-js/faker";

const { firstName, lastName } = faker.name;

describe("Registering an account", () => {
  before(() => {
    cy.visit("/signin");
  });

  it("Visits the login page and checks if the -- Dont have an account? Sign Up -- button is available", () => {
    cy.url().should("include", "/signin");
    loginPage.registerAnAccountLink.should("be.visible");
  });

  it.only("Navigates to the Account registration page and checks for required page elements and empty inputs error visibility", () => {
    cy.visit("/signin");
    loginPage.registerAnAccountLink.click();
    cy.url().should("include", "/signup");

    registerPage.formInputIds.forEach((inputId) => {
      cy.get(inputId).should("be.visible").click().blur();
    });
    registerPage.formInputHelperTexts.forEach((helperText) => {
      cy.contains(helperText).should("be.visible");
    });

    // registerPage.firstNameInputField.should("be.visible");
    // registerPage.firstNameInputField.click().blur();
    // registerPage.firstNameRequiredHelperText.should("be.visible");
    // registerPage.lastNameInputField.should("be.visible");
    // registerPage.lastNameInputField.click().blur();
    // registerPage.lastNameRequiredHelperText.should("be.visible");
    // registerPage.usernameInputField.should("be.visible");
    // registerPage.usernameInputField.click().blur();
    // registerPage.usernameRequiredHelperText.should("be.visible");
    // registerPage.passwordInputField.should("be.visible");
    // registerPage.passwordInputField.click().blur();
    // registerPage.passwordRequiredHelperText.should("be.visible");
    // registerPage.confirmPasswordInputField.should("be.visible");
    // registerPage.confirmPasswordInputField.click().blur();
    // registerPage.confirmPasswordRequiredHelperText.should("be.visible");
    // registerPage.signUpButton.should("be.visible");
  });

  it("Fills out the user registration form and registers a new user", () => {
    cy.visit("/signup");
    registerPage.firstNameInputField.type(firstName());
    registerPage.lastNameInputField.type(lastName());
    registerPage.usernameInputField.type(faker.internet.userName());
    registerPage.passwordInputField.type(Cypress.env().defaultPassword);
    registerPage.confirmPasswordInputField.type(Cypress.env().defaultPassword);
    registerPage.signUpButton.click();
  });
});
