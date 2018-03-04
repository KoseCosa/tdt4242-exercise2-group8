export class Product {
  constructor(product: any) {
    this.id = product._id;
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.stock = product.stock;
    this.salePercentage = product.salePercentage;
    this.getBy = product.getBy;
    this.payFor = product.payFor;
  }
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  salePercentage: number;
  getBy: number;
  payFor: number;
}
