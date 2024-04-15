import { newPreservedUsername } from "../../tests/ui/successfulRegistration.cy";
import { defaultPassword } from "../../support/users";
import { loginFormSelectors } from "../../support/selectors/loginSelectors";
import {
  onboardingSelectors,
  bankAccountArray,
  bankAccountDetails,
} from "../../support/selectors/onboardingSelectors";

describe("Logging in on a new account and going through the onboarding", () => {
  it("Logs in for the first time after account registration and goes through the onboarding process", () => {
    cy.visit("/signin");
    cy.login(newPreservedUsername, defaultPassword);
    cy.get(loginFormSelectors.signInButton).click();
    cy.get(onboardingSelectors.onboardingDialogTitle).should(
      "contain",
      "Get Started with Real World App"
    );
    cy.contains("Real World App requires a Bank Account to perform transactions.");
    cy.get(onboardingSelectors.onboardingButtonNext).isVisible().click();
    cy.assertFormFields(bankAccountArray);
    bankAccountArray.forEach((inputField, index) => {
      cy.get(inputField).type(bankAccountDetails[index]); // todo
    });
    cy.get(onboardingSelectors.createBankAccountSaveButton).click();
    cy.get(onboardingSelectors.onboardingDialogTitle).should("contain", "Finished");
    cy.contains("You're all set!");
    cy.contains("We're excited to have you aboard the Real World App!");
    cy.get(onboardingSelectors.onboardingButtonNext).click();
  });
});
