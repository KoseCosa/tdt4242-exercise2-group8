export class Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  salePercentage: number;
  packageDeal: PackageDeal;
}

export class PackageDeal {
  constructor(get: number, pay: number) {
    this.get = get;
    this.pay = pay;
  }
  get: number;
  pay: number;
}
