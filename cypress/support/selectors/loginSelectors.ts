export const loginSelector: LoginSelectors = {
  usernameInputField: "#username",
  passwordInputField: "#password",
  rememberMeCheckbox: "[data-test='signin-remember-me']",
  rememberMeLabel: ".MuiFormControlLabel-root > .MuiTypography-root",
  signInButton: '[data-test="signin-submit"]',
  registerAnAccountLink: '[data-test="signup"]',
};

export const loginSelectors: string[] = [
  loginSelector.usernameInputField,
  loginSelector.passwordInputField,
  loginSelector.rememberMeCheckbox,
  loginSelector.rememberMeLabel,
  loginSelector.signInButton,
  loginSelector.registerAnAccountLink,
];

export const helperText: string = "Username is required";
