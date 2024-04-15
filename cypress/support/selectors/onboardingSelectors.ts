import { accountName, routingNumber } from "../../support/randomizedFakerData";

export const onboardingSelectors: OnboardingSelectors = {
  onboardingDialogTitle: '[data-test="user-onboarding-dialog-title"]',
  onboardingButtonNext: '[data-test="user-onboarding-next"]',
  bankName: "#bankaccount-bankName-input",
  routingNumber: "#bankaccount-routingNumber-input",
  accountNumber: "#bankaccount-accountNumber-input",
  createBankAccountSaveButton: '[data-test="bankaccount-submit"]',
};

export const bankAccountArray: string[] = [
  onboardingSelectors.bankName,
  onboardingSelectors.routingNumber,
  onboardingSelectors.accountNumber,
];

export const bankAccountDetails: string[] = [accountName(), routingNumber(), routingNumber()];
