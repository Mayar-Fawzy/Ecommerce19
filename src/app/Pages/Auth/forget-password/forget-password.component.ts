import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';

import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordService } from '../../../core/Services/forgot-password.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RoutingModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  private readonly _ToastrService=inject(ToastrService);
  private readonly _ForgotPasswordService=inject(ForgotPasswordService);
  private readonly _Router=inject(Router);
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  message: string = '';
  isloading = false;

  forgetpasswordform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ResetCodeform: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required]),
  });
//newPass 
  newPasswordform: FormGroup = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[1-9]{5,}$/)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });



  handelforgetpassword(): void {
    this.isloading = true;
    let emailinfo = this.forgetpasswordform.value;

    this._ForgotPasswordService.forgetPassword(emailinfo).subscribe({
      next: (response) => {
        console.log(response);
        this.isloading = false;
        this._ToastrService.success('success', 'Check Your Email');
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        console.log(err);
        this.isloading = false;
        this.message = err.error.message;
        this._ToastrService.error('error', err.error.message);
      },
    });
  }

  hanelResetCode() {
    this.isloading = true;
    let resetCode = this.ResetCodeform.value;

     this._ForgotPasswordService.verifyRestCode(resetCode).subscribe({
       next: (response) => {
         console.log(response);
        this.isloading = false;
        this._ToastrService.success('success', 'Verify Code');
        this.step2 = false;
        this.step3 = true;
       },
      error: (err) => {
        console.log(err);
        this.isloading = false;
        this._ToastrService.error('error', err.error.message);
        this.message = err.error.message;
      },
    });
  }

  handelnewPassword() {
    this.isloading = true;
    let newPassword = this.newPasswordform.value;
   console.log(newPassword)
    this._ForgotPasswordService.resetPassword(newPassword).subscribe({
      next: (response) => {
        console.log(response);
        this.isloading = false;
        if (response.token) {
          localStorage.setItem("userToken", response.token);
          this.message = 'password reset successfully';
          this._ToastrService.success('success', ' Password Changed  ');
          this.step3 = false;
          this._Router.navigate(['/auth/login']);
        }
      },
      error: (err) => {
        console.log(err);
        this.isloading = false;
        this._ToastrService.error('error', err.error.message);
        this.message = err.error.message;
      },
    });
  }
}
