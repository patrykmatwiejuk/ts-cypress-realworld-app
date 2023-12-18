export const loginFormSelectors: LoginSelectors = {
  usernameInputField: "#username",
  passwordInputField: "#password",
  rememberMeCheckbox: "[data-test='signin-remember-me']",
  rememberMeLabel: ".MuiFormControlLabel-root > .MuiTypography-root",
  signInButton: '[data-test="signin-submit"]',
  registerAnAccountLink: '[data-test="signup"]',
};

export const loginSelectors: string[] = [
  loginFormSelectors.usernameInputField,
  loginFormSelectors.passwordInputField,
  loginFormSelectors.rememberMeCheckbox,
  loginFormSelectors.rememberMeLabel,
  loginFormSelectors.signInButton,
  loginFormSelectors.registerAnAccountLink,
];

export const helperText: string = "Username is required";
