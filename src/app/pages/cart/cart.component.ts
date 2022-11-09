import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from "src/app/models/cart.model";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [
    {
      product: 'https://picsum.photos/200/300',
      name: 'snickers',
      quantity: 1,
      price: 150,
      id: 1,
    },
    {
      product: 'https://picsum.photos/200/300',
      name: 'snickers',
      quantity: 1,
      price: 150,
      id: 2,
    }
  ] };
  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: CartItem[]): number {
    return items.
      map((item: CartItem) => item.price * item.quantity).
        reduce((prevValue, value) => prevValue + value, 0);
  }
}
