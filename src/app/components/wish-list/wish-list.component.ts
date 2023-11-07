import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  constructor(
    private _WishListService: WishListService,
    private _ToastrService: ToastrService,
    private _CartService: CartService
  ) {}
  wishes: any[] = [];

  ngOnInit(): void {
    this._WishListService.getWishProducts().subscribe({
      next: (res) => {
        this.wishes = res.data
        console.log(this.wishes);
      },
    });
  }

  removeProduct(id: string): void {
    this._WishListService.removeFromWishList(id).subscribe({
      next: (res) => {
        this.ngOnInit()
        console.log(res);
      },
    });
  }

  addProduct(id: string): void {
    this._CartService.addCartItem(id).subscribe({
      next: (res) => {
        this._CartService.numOfCartItems.next(res.numOfCartItems);
        this._ToastrService.success(res.message);
        console.log(res.numOfCartItems);
      },
      error: (err) => {
        this._ToastrService.error(err.errors.message);
        console.log('error', err);
      },
    });
  }
}
