export class Product {
    name: string;
    price: number;
    category: string;
    stock: number;
    salePercentage: number;
    packageDeal: PackageDeal;
}

export class PackageDeal {
  get: number;
  pay: number;
}
