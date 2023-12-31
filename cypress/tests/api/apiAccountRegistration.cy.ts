import { faker } from "@faker-js/faker";
import { defaultPassword } from "../../support/users";

const { firstName, lastName } = faker.name;
const { userName } = faker.internet;
const apiUrl = Cypress.env("apiUrl");

// Make the POST request and assert the response
describe("API registration", () => {
  it("creates an account via API and asserts the response", () => {
    cy.request("POST", `${apiUrl}/users`, {
      /* request body */
      firstName: firstName(),
      lastName: lastName(),
      username: userName(),
      password: defaultPassword,
      confirmPassword: defaultPassword,
    }).then((response) => {
      expect(response.status).to.equal(201);

      const userProperties: string[] = [
        "balance",
        "firstName",
        "lastName",
        "username",
        "createdAt",
        "id",
        "modifiedAt",
        "password",
        "uuid",
      ];

      cy.wrap(response.body.user).should((user: object) => {
        userProperties.forEach((property: string) => {
          expect(user).to.have.property(property);
        });
      });

      // expected response properties
      //   balance: 0,
      //   createdAt: "2023-12-09T09:36:02.862Z",
      //   firstName: firstName(),
      //   id: "PWeCSnDQ_",
      //   lastName: lastName(),
      //   modifiedAt: "2023-12-09T09:36:02.862Z",
      //   password: "$2a$10$CYFxegFaCdiFxQNp.bD4LOZaR1KHJ68iXhdIgAsZ96Hdg7dHaoPvG",
      //   username: "username",
      //   uuid: "027a1021-3536-463b-a5d2-f36d41e2a7c7"
    });
  });
});
