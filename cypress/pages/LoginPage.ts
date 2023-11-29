import Users from "../support/users";

class LoginPage {
  get usernameInputField() {
    return cy.get("#username");
  }
  get passwordInputField() {
    return cy.get("#password");
  }
  get rememberMeCheckbox() {
    return cy.get("[data-test='signin-remember-me']");
  }
  get rememberMeLabel() {
    return cy.get(".MuiFormControlLabel-root > .MuiTypography-root");
  }
  get signInButton() {
    return cy.get('[data-test="signin-submit"]');
  }
  get registerAnAccountLink() {
    return cy.get('[data-test="signup"]');
  }
}
const userKB = Users.userKB;
const userTB = Users.userTB;
const userA = Users.userA;
const userG = Users.userG;
const userJK = Users.userJK;

const loginPage = new LoginPage();

export { loginPage, userKB, userTB, userA, userG, userJK };
