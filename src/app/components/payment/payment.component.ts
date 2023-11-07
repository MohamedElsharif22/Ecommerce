import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _PaymentService: PaymentService
  ) {}
  orderForm: FormGroup = new FormGroup({
    details: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });
  cartId: any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get('id');
      },
    });
  }

  handleForm(): void {
    console.log(this.orderForm.value);
    const orderInfo: object = this.orderForm.value;
    const cartId: string = this.cartId;
    this._PaymentService.checkOut(cartId, orderInfo).subscribe({
      next: (res) => {
        console.log(res);
        open(res.session.url, '_self');
      },
    });
  }
}
