import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss'],
})
export class NavbarBlankComponent implements OnInit {
  constructor(private _Router: Router,private _CartService: CartService) {}
  cartItemsCount = 0;

  ngOnInit(): void {
    this._CartService.getCartItems().subscribe({
      next: (value) => { 
        this.cartItemsCount = value.numOfCartItems
      }
    })
    this._CartService.numOfCartItems.subscribe({
      next: (data) => { 
        this.cartItemsCount = data
      }
      })
  }
  signOut(): void {
    localStorage.removeItem('token');
    this._Router.navigate(['login']);
  }
}
