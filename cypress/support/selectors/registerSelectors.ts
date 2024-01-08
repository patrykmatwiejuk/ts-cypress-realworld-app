const registerFormSelectors: RegisterSelectors = {
  firstNameInputField: "#firstName",
  lastNameInputField: "#lastName",
  usernameInputField: "#username",
  passwordInputField: "#password",
  confirmPasswordInputField: "#confirmPassword",
  signUpButton: "[data-test='signup-submit']",
  firstNameRequiredHelperText: "First Name is required",
  lastNameRequiredHelperText: "Last Name is required",
  usernameRequiredHelperText: "Username is required",
  passwordRequiredHelperText: "Enter your password",
  confirmPasswordRequiredHelperText: "Confirm your password",
};

const formInputIds: string[] = [
  "#firstName",
  "#lastName",
  "#username",
  "#password",
  "#confirmPassword",
];

const formInputHelperTexts: string[] = [
  "First Name is required",
  "Last Name is required",
  "Username is required",
  "Enter your password",
  "Confirm your password",
];

const {
  firstNameInputField,
  lastNameInputField,
  usernameInputField,
  passwordInputField,
  confirmPasswordInputField,
  signUpButton,
  firstNameRequiredHelperText,
  lastNameRequiredHelperText,
  usernameRequiredHelperText,
  passwordRequiredHelperText,
  confirmPasswordRequiredHelperText,
} = registerFormSelectors;

export {
  firstNameInputField,
  lastNameInputField,
  usernameInputField,
  passwordInputField,
  confirmPasswordInputField,
  signUpButton,
  firstNameRequiredHelperText,
  lastNameRequiredHelperText,
  usernameRequiredHelperText,
  passwordRequiredHelperText,
  confirmPasswordRequiredHelperText,
  formInputIds,
  formInputHelperTexts,
};
