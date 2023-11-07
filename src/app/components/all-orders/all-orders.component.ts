import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent implements OnInit {
  constructor(private _PaymentService: PaymentService) {}
  userId: any = localStorage.getItem('_user');
  ngOnInit(): void {
    this._PaymentService.getUserOrders(this.userId).subscribe({
      next: (res) => { 
        console.log(res);
        
      }
    })
  }
}
