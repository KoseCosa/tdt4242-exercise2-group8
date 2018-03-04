export class Product {
  constructor(product: any = null) {
    if (product) {
      this.id = product._id || null;
      this.name = product.name || null;
      this.price = product.price || null;
      this.category = product.category || null;
      this.stock = product.stock || null;
      this.salePercentage = product.salePercentage || null;
      this.getBy = product.getBy || null;
      this.payFor = product.payFor || null;
    }
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
