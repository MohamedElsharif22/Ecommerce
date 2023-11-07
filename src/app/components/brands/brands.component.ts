import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
}) 
export class BrandsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) { }
  brands: any[] = [];

  ngOnInit(): void {
    this._ProductsService.getBrands().subscribe({
      next: (res) => {
        this.brands = res.data.slice(0,30)
        console.log('Brand list : ', this.brands);
      },
      error: (err) => {
        console.log('error: ',err);
        
      }
    })
  }
}
