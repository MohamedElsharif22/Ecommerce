import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  catsData: any[] = [];
  constructor(private _ProductsService: ProductsService) { }
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
  }
}
