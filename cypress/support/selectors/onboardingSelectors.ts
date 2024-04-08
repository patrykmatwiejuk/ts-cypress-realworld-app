export const onboardingSelectors: OnboardingSelectors = {
  onboardingDialogTitle: '[data-test="user-onboarding-dialog-title"]',
  onboardingButtonNext: '[data-test="user-onboarding-next"]',
  bankName: "#bankaccount-bankName-input",
  routingNumber: "#bankaccount-routingNumber-input",
  accountNumber: "#bankaccount-accountNumber-input",
};

export const bankAccountArray: string[] = [
  onboardingSelectors.bankName,
  onboardingSelectors.routingNumber,
  onboardingSelectors.accountNumber,
];
