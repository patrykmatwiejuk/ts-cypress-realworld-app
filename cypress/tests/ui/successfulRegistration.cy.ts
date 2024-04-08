import { loginFormSelectors } from "../../support/selectors/loginSelectors";
import { defaultPassword } from "../../support/users";
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
import { onboardingSelectors } from "../../support/selectors/onboardingSelectors";

const {
  firstNameInputField,
  lastNameInputField,
  usernameInputField,
  passwordInputField,
  confirmPasswordInputField,
  signUpButton,
} = registerFormSelectors;

export const newPreservedUsername = preservedUserName;

describe("Registering an account and logging in on a registered account", () => {
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
    cy.get(usernameInputField).type(newPreservedUsername);
    cy.get(passwordInputField).type(defaultPassword, { log: false });
    cy.get(confirmPasswordInputField).type(defaultPassword, { log: false });
    cy.intercept("POST", `**/users`).as("registerInterception");
    cy.get(signUpButton).click();

    cy.wait("@registerInterception")
      .its("request.body")
      .then((requestPayload) => {
        // Assert against the request payload
        expect(requestPayload).to.deep.equal({
          firstName: preservedFirstName,
          lastName: preservedLastName,
          username: newPreservedUsername,
          password: defaultPassword,
          confirmPassword: defaultPassword,
        });
      });
  });
  it("Logs in for the first time after account registration", () => {
    cy.visit("/signin");
    cy.login(newPreservedUsername, defaultPassword);
    cy.get(loginFormSelectors.signInButton).click();
    cy.get(onboardingSelectors.onboardingDialogTitle).should(
      "contain",
      "Get Started with Real World App"
    );
    cy.contains("Real World App requires a Bank Account to perform transactions.");
    cy.get(onboardingSelectors.onboardingButtonNext).isVisible();
  });
});
