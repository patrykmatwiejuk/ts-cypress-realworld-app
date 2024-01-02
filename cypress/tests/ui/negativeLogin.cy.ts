import { userName } from "../../support/randomizedFakerData";
import { loginFormSelectors } from "../../support/selectors/loginSelectors";
import { defaultPassword } from "../../support/users";

describe("Negative test case for logging in", () => {
  before(() => {
    cy.visit("/signin");
    cy.url().should("include", "/signin");
    cy.intercept("POST", `**/login`).as("loginInterception");
  });
  it("Fails to log in due to incorrect credentials", () => {
    cy.get(loginFormSelectors.usernameInputField).type(userName());
    cy.get(loginFormSelectors.passwordInputField).type(defaultPassword);
    cy.get(loginFormSelectors.signInButton).click();
    cy.wait("@loginInterception").then((interception) => {
      expect(interception.response?.statusCode).to.eq(401);
    });
    cy.get(loginFormSelectors.signInErrorAlert).contains("Username or password is invalid");
  });
});
