import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/Services/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-change-password',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrls:['../show-address/show-address.component.scss','./change-password.component.scss'] 
})
export class ChangePasswordComponent {
private readonly _AuthService = inject(AuthService);
private readonly _Router= inject(Router);
private readonly _ToastrService=inject(ToastrService)
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
       this._ToastrService.success('Password Changed Successfully','FreshCart')
               this.changePasswordForm.reset();
        this._Router.navigate(['/auth/login'])

      },
      error: (err) => {console.log('Error while changing password:', err)
      this._ToastrService.error(err.error.message,'FreshCart');
      this._Router.navigate(['/auth/login'])
    }
    });
  } else {
    console.log('Form is invalid');
  }
}
resetForm(){
  this.changePasswordForm.reset();
}
}
