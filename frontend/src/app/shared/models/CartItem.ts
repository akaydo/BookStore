import { IFood } from "./IFood";

export class CartItem{
  constructor(public food: IFood){ }
  quantity:number = 1 ;
  price: number = this.food.price;
}
