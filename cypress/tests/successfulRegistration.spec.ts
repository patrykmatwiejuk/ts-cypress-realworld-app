import { loginPage, userKB } from "../pages/LoginPage";
import { registerPage } from "../pages/RegisterPage";
import { faker } from "@faker-js/faker";

describe("Registering an account", () => {
  before(() => {
    cy.visit("/signin");
  });

  it("Visits the login page and checks if the -- Dont have an account? Sign Up -- button is available", () => {
    cy.url().should("include", "/signin");
    loginPage.registerAnAccountLink.should("be.visible");
  });

  it("Navigates to the Account registration page and checks for required page elements", () => {
    cy.visit("/signin");
    loginPage.registerAnAccountLink.click();
    cy.url().should("include", "/signup");
    registerPage.firstNameInputField.should("be.visible");
    registerPage.lastNameInputField.should("be.visible");
    registerPage.usernameInputField.should("be.visible");
    registerPage.passwordInputField.should("be.visible");
    registerPage.confirmPasswordInputField.should("be.visible");
    registerPage.signUpButton.should("be.visible");
  });

  it("Fills out the user registration form and registers a new user", () => {
    cy.visit("/signup");
    registerPage.firstNameInputField.type(faker.name.firstName());
    registerPage.lastNameInputField.type(faker.name.lastName());
  });
});
