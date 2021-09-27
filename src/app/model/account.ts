export class Account{
  username ='';
  password ='';
  img='';
  email='';
  address='';
  constructor(username: string, password: string, img: string, email: string, address: string) {
    this.username = username;
    this.password = password;
    this.img = img;
    this.email = email;
    this.address = address;
  }
}
