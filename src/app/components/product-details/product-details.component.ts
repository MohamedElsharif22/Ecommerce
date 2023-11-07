import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}
  productId: string | null = '';
  productDetails: any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
      },
    });

    this._ProductsService.geSpecProduct(this.productId).subscribe({
      next: (res) => {
        this.productDetails = res.data;
        console.log(res.data);
      },
      error: (err) => {
        console.log(err);
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    items: 1,
    nav: false,
  };
}
