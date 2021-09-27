export class Product {
  name: string;
  price: number;
  img: string;
  status : boolean;

  constructor(name: string, price: number, img: string, status: boolean) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.status = status;
  }
}
