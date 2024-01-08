import { loginFormSelectors } from "../../support/selectors/loginSelectors";
import { userKB, userTB, userA, userG, userJK, defaultPassword } from "../../support/users";
import {
  firstNameInputField,
  lastNameInputField,
  usernameInputField,
  passwordInputField,
  confirmPasswordInputField,
  signUpButton,
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

    cy.get(firstNameInputField).type(preservedFirstName);
    cy.get(lastNameInputField).type(preservedLastName);
    cy.get(usernameInputField).type(preservedUserName);
    cy.get(passwordInputField).type(defaultPassword, { log: false });
    cy.get(confirmPasswordInputField).type(defaultPassword, { log: false });
    cy.intercept("POST", `**/users`).as("registerInterception");
    cy.get(signUpButton).click();

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
