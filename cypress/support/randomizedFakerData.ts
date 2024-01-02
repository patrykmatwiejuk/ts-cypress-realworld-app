import { faker } from "@faker-js/faker";

const { firstName, lastName } = faker.name;
const { userName } = faker.internet;
const preservedFirstName = firstName();
const preservedLastName = lastName();
const preservedUserName = userName();

export { userName, preservedFirstName, preservedLastName, preservedUserName };
