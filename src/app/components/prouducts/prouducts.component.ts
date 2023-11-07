import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-prouducts',
  templateUrl: './prouducts.component.html',
  styleUrls: ['./prouducts.component.scss'],
})
export class ProuductsComponent implements OnInit {
  searchTerm: string = '';
  products: any[] = [];
  constructor(
    private _ProductsService: ProductsService,
    private _ToastrService: ToastrService,
    private _CartService: CartService
  ) {}

  ngOnInit(): void {
    this._ProductsService.getProuducts().subscribe({
      next: (res) => {
        this.products = res.data;
        console.log(this.products);
      },
      error: (err) => {
        console.error('Error: ', err);
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
