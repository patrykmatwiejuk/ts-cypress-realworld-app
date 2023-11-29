class RegisterPage {
  get firstNameInputField() {
    return cy.get("#firstName");
  }
  get lastNameInputField() {
    return cy.get("#lastName");
  }
  get usernameInputField() {
    return cy.get("#username");
  }
  get passwordInputField() {
    return cy.get("#password");
  }
  get confirmPasswordInputField() {
    return cy.get("#confirmPassword");
  }
  get signUpButton() {
    return cy.get("[data-test='signup-submit']");
  }
}

const registerPage = new RegisterPage();

export { registerPage };
