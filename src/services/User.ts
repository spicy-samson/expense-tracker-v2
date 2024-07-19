export class User {
  user_id: number;
  first_name: string;
  last_name: string;
  email_address: string;
  password: string;
  address: string;
  gender: string;
  birthdate: Date;
  
  constructor(
    user_id: number,
    first_name: string,
    last_name: string,
    email_address: string,
    password: string,
    address: string,
    gender: string,
    birthdate: Date,
  ) {
    this.user_id = user_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email_address = email_address;
    this.password = password;
    this.address = address;
    this.gender = gender;
    this.birthdate = birthdate;
  }
}