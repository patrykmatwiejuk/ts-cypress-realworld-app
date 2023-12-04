type LoginCredentials = {
  username: string;
  password: string;
};

// import { mount } from "cypress/react";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.

namespace Cypress {
  interface Chainable {
    loginAs(userCredentials: LoginCredentials): Chainable<VoidFunction>;
  }
}
