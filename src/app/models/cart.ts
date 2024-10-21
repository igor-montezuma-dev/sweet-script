export interface ICart {
  quantity: number;
  items: ICartItem[];
  total: number;
}

export interface ICartItem {
  id: number;
  name: string;
  unityPrice: number;
  multipliedPrice: number;
  quantity: number;
}
