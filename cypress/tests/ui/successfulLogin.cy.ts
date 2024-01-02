import {
  loginFormSelectors,
  loginSelectorsArray,
  helperText,
} from "../../support/selectors/loginSelectors";
import { userKB, userTB, userA, userG, userJK, defaultPassword } from "../../support/users";

describe("Logging in", () => {
  before(() => {
    cy.visit("/signin");
    cy.url().should("include", "/signin");
    loginSelectorsArray.forEach((selector: string, index) => {
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
    cy.get(loginFormSelectors.signInButton).click();
  });
});
