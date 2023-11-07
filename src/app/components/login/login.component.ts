import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading: boolean = false;
  errMsg: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) {
    console.log(this.loginForm);
  }
  loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w{6,}$/),
      ]),
    }
  );
  handleForm(): void {
    this.isLoading = true;
    const userData = this.loginForm.value;
    if (this.loginForm.valid) {
      this._AuthService.signIn(userData).subscribe({
        next: (res) => {
          this.isLoading = false;
          localStorage.setItem('token', res.token);
          this._Router.navigate(['/home']);
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
