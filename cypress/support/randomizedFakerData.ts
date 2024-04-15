import { faker } from "@faker-js/faker";

// USER RANDOM DATA
const { firstName, lastName } = faker.name;
const { userName } = faker.internet;
const preservedFirstName = firstName();
const preservedLastName = lastName();
const preservedUserName = userName();

// BANK ACCOUNT RANDOM DATA
const { accountName, routingNumber } = faker.finance;
const preservedAccountName = accountName();
const preservedRoutingNumber = routingNumber();

export {
  userName,
  preservedFirstName,
  preservedLastName,
  preservedUserName,
  accountName,
  routingNumber,
  preservedAccountName,
  preservedRoutingNumber,
};
