const defaultPassword = Cypress.env().defaultPassword;

// interface UsersTemplate {
//   username: string;
//   password: string;
// }

// class User implements UsersTemplate {
//   username: string;
//   password = defaultPassword;

//   constructor(username: string, password: string = defaultPassword) {
//     this.username = username;
//     this.password = password;
//   }
// }

// const userKB = new User("Katharina_Bernier");
// const userTB = new User("Tavares_Barrows");
// const userA = new User("Allie2");
// const userG = new User("Giovanna74");
// const userJK = new User("Jessyca.Kuhic");

// const Users = {
//   userKB,
//   userTB,
//   userA,
//   userG,
//   userJK,
// };

const defaultUsernames = {
  userKB: "Katharina_Bernier",
  userTB: "Tavares_Barrows",
  userA: "Allie2",
  userG: "Giovanna74",
  userJK: "Jessyca.Kuhic",
};

const { userKB, userTB, userA, userG, userJK } = defaultUsernames;

export { userKB, userTB, userA, userG, userJK, defaultPassword };
