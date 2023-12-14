import { loginSelector, loginSelectors, helperText } from "../../support/selectors/loginSelectors";
import { userKB, userTB, userA, userG, userJK, defaultPassword } from "../../support/users";

describe("Logging in", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("Visits the page and checks all required elements", () => {
    cy.url().should("include", "/signin");
    loginSelectors.forEach((selector: string, index: number) => {
      if (index === 0) {
        cy.get(selector).isVisible().click().blur();
        cy.contains(helperText).isVisible();
      } else {
        cy.get(selector).isVisible();
      }
    });
  });

  it("Fills out the log in form", () => {
    cy.login(userKB, defaultPassword);
    cy.get(loginSelector.signInButton).click();
  });
});
