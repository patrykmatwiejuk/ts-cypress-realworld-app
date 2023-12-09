import { loginPage, userKB } from "../../pages/LoginPage";
import { registerPage } from "../../pages/RegisterPage";
import { defaultPassword } from "../../support/users";
import { faker } from "@faker-js/faker";

const { firstName, lastName } = faker.name;
const { userName } = faker.internet;
const apiUrl = Cypress.env("apiUrl");

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

    registerPage.firstNameInputField.type(firstName());
    registerPage.lastNameInputField.type(lastName());
    registerPage.usernameInputField.type(userName());
    registerPage.passwordInputField.type(defaultPassword, { log: false });
    registerPage.confirmPasswordInputField.type(defaultPassword, { log: false });
    registerPage.signUpButton.click();

    // cy.intercept("POST", `${apiUrl}/users`, (req) => {
    //   req.reply({
    //     statusCode: 201,
    //     body: {
    //       user: {
    //         balance: 0,
    //         createdAt: "2023-12-09T09:36:02.862Z",
    //         firstName: "user",
    //         id: "PWeCSnDQ_",
    //         lastName: "user",
    //         modifiedAt: "2023-12-09T09:36:02.862Z",
    //         password: "$2a$10$CYFxegFaCdiFxQNp.bD4LOZaR1KHJ68iXhdIgAsZ96Hdg7dHaoPvG",
    //         username: "username",
    //         uuid: "027a1021-3536-463b-a5d2-f36d41e2a7c7",
    //       },
    //     },
    //   });
    // });
  });
});
