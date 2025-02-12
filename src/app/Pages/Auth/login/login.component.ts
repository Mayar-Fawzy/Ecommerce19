import { Component, inject } from '@angular/core';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { AuthService } from '../../../core/Services/auth.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RoutingModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  msgError!: string;
  isloading: boolean = false;
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
     
    ]),
  });
  ngOnInit(): void {}
  Login() {
    if (this.loginform.valid) {
      this.isloading = true;
      this._AuthService.login(this.loginform.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isloading = true;
          // 1-save token
          localStorage.setItem('userToken', res.token);
          //2- decode token
          this._AuthService.saveuserdata();
          //3-navigate to home
          this._Router.navigate(['/home']);
        },
        error: (err: HttpErrorResponse) => {
          this.msgError = err.error.message;
          console.log(this.msgError);
          this.isloading = false;
        },
      });
    } else {
      this.loginform.markAllAsTouched();
      this.loginform.setErrors({ mismatch: true });
    }
  }
}
