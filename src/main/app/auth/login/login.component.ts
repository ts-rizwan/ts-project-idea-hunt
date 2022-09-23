import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Constants } from '@app/common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading: boolean = false;
  public constantsFactory = Constants;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private auth: AuthService, private router: Router) {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  logIn() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.loading = true;
      this.auth
        .logIn(this.email?.value as string, this.password?.value as string)
        .then(() => {
          this.router.navigate(['/logout']);
        })
        .catch(error => {
          this.setLoginError(error.code);
          this.loading = false;
        });
    }
  }

  setLoginError(errorCode: string) {
    switch (errorCode) {
      case Constants.invalidEmailRoute:
      case Constants.wrongPasswordRoute:
      case Constants.notFoundRoute: {
        this.loginForm.setErrors({ unauthenticated: true });
        break;
      }
      default: {
        this.loginForm.setErrors({ unknownError: true });
        break;
      }
    }
  }
}
