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
  get firstNameRequiredHelperText() {
    return cy.contains("First Name is required");
  }
  get lastNameRequiredHelperText() {
    return cy.contains("Last Name is required");
  }
  get usernameRequiredHelperText() {
    return cy.contains("Username is required");
  }
  get passwordRequiredHelperText() {
    return cy.contains("Enter your password");
  }
  get confirmPasswordRequiredHelperText() {
    return cy.contains("Confirm your password");
  }
}

const registerPage = new RegisterPage();

export { registerPage };
