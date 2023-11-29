// Users:
// t45AiwidW Katharina_Bernier
// qywYp6hS0U Tavares_Barrows
// bDjUb4ir5O Allie2
// 24VniajY1y Giovanna74
// tsHF6_D5oQ Jessyca.Kuhic

interface UsersTemplate {
  username: string;
  password: string;
}

class User implements UsersTemplate {
  username: string;
  password = "s3cret";

  constructor(username: string, password: string = "s3cret") {
    this.username = username;
    this.password = password;
  }
}

const userKB = new User("Katharina_Bernier");
const userTB = new User("Tavares_Barrows");
const userA = new User("Allie2");
const userG = new User("Giovanna74");
const userJK = new User("Jessyca.Kuhic");

const Users = {
  userKB,
  userTB,
  userA,
  userG,
  userJK,
};

export default Users;
