import { loginPage, userKB, userTB, userA, userG, userJK } from "../pages/LoginPage";

describe("Logging in", () => {
  before(() => {
    cy.visit("/signin");
  });

  it("Visits the page and checks all required elements", () => {
    cy.url().should("include", "/signin");
    loginPage.usernameInputField.should("be.visible");
    loginPage.passwordInputField.should("be.visible");
    loginPage.rememberMeCheckbox.should("be.visible");
    loginPage.rememberMeLabel.contains("Remember me");
  });

  it("Fills out the log in form", () => {
    cy.loginAs(userKB);
  });
});
