const loginFormSelectors: LoginSelectors = {
  usernameInputField: "#username",
  passwordInputField: "#password",
  rememberMeCheckbox: "[data-test='signin-remember-me']",
  rememberMeLabel: ".MuiFormControlLabel-root > .MuiTypography-root",
  signInButton: '[data-test="signin-submit"]',
  registerAnAccountLink: '[data-test="signup"]',
};

const loginSelectors: string[] = [
  loginFormSelectors.usernameInputField,
  loginFormSelectors.passwordInputField,
  loginFormSelectors.rememberMeCheckbox,
  loginFormSelectors.rememberMeLabel,
  loginFormSelectors.signInButton,
  loginFormSelectors.registerAnAccountLink,
];

const helperText: string = "Username is required";

export { loginFormSelectors, loginSelectors, helperText };
