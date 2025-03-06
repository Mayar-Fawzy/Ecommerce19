import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/Services/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrls:['../show-address/show-address.component.scss','./change-password.component.scss'] 
})
export class ChangePasswordComponent {
private readonly _AuthService = inject(AuthService);
private readonly _Router= inject(Router);
changePasswordForm = new FormGroup({
  currentPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  rePassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
});
ChangePass(){
  if (this.changePasswordForm.valid) {
    console.log("Form Data:", this.changePasswordForm.value);
    this._AuthService.ChangePassword(this.changePasswordForm.value).subscribe({
      next: (res) => {
        console.log('Password Changed Successfully:', res);
        this.changePasswordForm.reset();
        

      },
      error: (err) => console.error('Error while changing password:', err)
    });
  } else {
    console.log('Form is invalid');
  }
}
resetForm(){
  this.changePasswordForm.reset();
}
}
