import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}

  cartItems: any = null;
  UserId:string = ''
  ngOnInit(): void {
    this._CartService.getCartItems().subscribe({
      next: ({ data }) => {
        this.cartItems = data;
        localStorage.setItem('_user', data.cartOwner);
        console.log(this.cartItems);
        console.log(this.UserId);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteItem(id: string): void {
    this._CartService.removeItem(id).subscribe({
      next: (response) => {
        console.log(response);
        this.cartItems = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  changeCount(id: string, count: number): void {
    if (count >= 1) {
      this._CartService.updateCartQuantity(count, id).subscribe({
        next: (response) => {
          console.log(response);
          this.cartItems = response.data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  clear(): void {
    this._CartService.clearCart().subscribe({
      next: (res) => {
        this.cartItems = null;
        this._CartService.numOfCartItems.next(0)
        
        console.log(res);
      },
    });
  }
}
