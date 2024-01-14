import { preservedUserName } from "../../support/randomizedFakerData";
import { defaultPassword } from "../../support/users";
import { loginFormSelectors } from "../../support/selectors/loginSelectors";
import { onboardingSelectors } from "../../support/selectors/onboardingSelectors";
describe("Logging in on a new account and going through the onboarding", () => {
  it("Logs in for the first time after account registration and goes through the onboarding process", () => {
    cy.visit("/signin");
    cy.login(preservedUserName, defaultPassword);
    cy.get(loginFormSelectors.signInButton).click();
    cy.get(onboardingSelectors.onboardingDialogTitle).should(
      "contain",
      "Get Started with Real World App"
    );
    cy.contains("Real World App requires a Bank Account to perform transactions.");
    cy.get(onboardingSelectors.onboardingButtonNext).isVisible().click();
  });
});
