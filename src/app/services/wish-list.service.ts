import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
  wishIcon: BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor(private _HttpClient: HttpClient) {}

  addProduct(id:string): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/wishlist`,
      {
      productId: id
    });
  }
  getWishProducts(): Observable<any> { 
    return this._HttpClient.get(`${this.baseUrl}/api/v1/wishlist`);
  }
  removeFromWishList(product_id:string): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/wishlist/${product_id}`)
  }
}
