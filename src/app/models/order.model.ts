export class Order {
  id: string;
  customer: string;
  products: Array<[string, number]>;
  status: string;
}
