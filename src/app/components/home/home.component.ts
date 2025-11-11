import { Component, OnInit, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _WishListService: WishListService,
    private _Renderer2: Renderer2
  ) {}
  clicked: boolean = false;
  searchTerm: string = '';
  catsData: any[] = [];
  products: any[] = [];
  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next: (res) => {
        this.catsData = res.data;
        console.log(this.catsData);
      },
      error: (err) => {
        console.error('Error: ', err);
      },
    });

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

  addToWishes(id: string, elm:HTMLSpanElement): void {
    this._WishListService.addProduct(id).subscribe({
      next: (res) => {
        console.log(res);
        this._Renderer2.addClass(elm,'text-danger');
      },
    });
  }

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

  heroOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    dotsSpeed: 400,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
}
