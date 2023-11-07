import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormControlOptions,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isLoading: boolean = false;
  errMsg: string = '';
  constructor(private _AuthService: AuthService,private _Router: Router) {
    console.log(this.registerForm);
  }
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w{6,}$/),
      ]),
      rePassword: new FormControl(''),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    { validators: [this.confirmPassword] } as FormControlOptions
  );

  confirmPassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if (rePassword?.value == '') {
      rePassword.setErrors({ required: true });
    } else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({ missMatch: true });
    }
  }

  handleForm(): void {
    this.isLoading = true;
    const userData = this.registerForm.value;
    if (this.registerForm.valid) {
      this._AuthService.register(userData).subscribe({
        next: (res) => {
          this.isLoading = false;
          this._Router.navigate(['login'])
          console.log(res);
        },
        error: (err) => {
          this.isLoading = false;
          this.errMsg = err.error.message || 'Something went wrong';
          console.error(err);
        },
      });
    }
  }
}
