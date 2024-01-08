import {
  loginFormSelectors,
  loginSelectorsArray,
  helperText,
} from "../../support/selectors/loginSelectors";
import { userKB, userTB, userA, userG, userJK, defaultPassword } from "../../support/users";
import {
  registerFormSelectors,
  formInputIds,
  formInputHelperTexts,
} from "../../support/selectors/registerSelectors";

import {
  preservedFirstName,
  preservedLastName,
  preservedUserName,
} from "../../support/randomizedFakerData";

describe("Registering an account", () => {
  before(() => {
    cy.visit("/signin");
  });

  it("Visits the login page and checks if the -- Dont have an account? Sign Up -- button is available", () => {
    cy.url().should("include", "/signin");
    cy.get(loginFormSelectors.registerAnAccountLink).isVisible();
  });

  it("Navigates to the Account registration page and checks for required page elements and empty inputs error visibility", () => {
    cy.visit("/signin");
    cy.get(loginFormSelectors.registerAnAccountLink).click();
    cy.url().should("include", "/signup");

    formInputIds.forEach((inputId: string, index) => {
      cy.get(inputId).isVisible().click().blur();
      const helperText = formInputHelperTexts[index];
      cy.contains(helperText).isVisible();
    });
  });

  it("Fills out the user registration form and registers a new user", () => {
    cy.visit("/signup");

    cy.get(registerFormSelectors.firstNameInputField).type(preservedFirstName);
    cy.get(registerFormSelectors.lastNameInputField).type(preservedLastName);
    cy.get(registerFormSelectors.usernameInputField).type(preservedUserName);
    cy.get(registerFormSelectors.passwordInputField).type(defaultPassword, { log: false });
    cy.get(registerFormSelectors.confirmPasswordInputField).type(defaultPassword, { log: false });

    cy.intercept("POST", `**/users`).as("registerInterception");

    cy.get(registerFormSelectors.signUpButton).click();

    cy.wait("@registerInterception").then((interception) => {
      const requestPayload = interception.request.body;

      // Assert against the request payload
      expect(requestPayload).to.deep.equal({
        firstName: preservedFirstName,
        lastName: preservedLastName,
        username: preservedUserName,
        password: defaultPassword,
        confirmPassword: defaultPassword,
      });
    });
  });
});
