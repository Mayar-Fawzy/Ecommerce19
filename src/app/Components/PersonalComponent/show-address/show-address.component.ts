import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AuthService } from '../../../core/Services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-address',
  imports: [ReactiveFormsModule],
  templateUrl: './show-address.component.html',
  styleUrl: './show-address.component.scss'
})
export class ShowAddressComponent {
  @Output() tabChange = new EventEmitter<number>();
 
  goToEditUser(num:number) {
    this.tabChange.emit(num);
  }
  private readonly _AuthService=inject(AuthService);
  userEmail :string= localStorage.getItem('EmailUser')!;
  userName: string =this._AuthService.saveuserdata().name;
  userForm = new FormGroup({
    name: new FormControl(this.userName, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(this.userEmail, [Validators.required, Validators.email]),
    phone: new FormControl('01000000000', [Validators.required, Validators.pattern('01[0-2]{1}[0-9]{8}')])

  });

  /** ✅ تحديث قيمة الاسم في الفورم */
  // UpdateName() {
  //   this.userForm.patchValue({ name: this.userName });
  // }

  /** ✅ إرسال الاسم الجديد إلى الـ API */
  UpdateUserName() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);     
       this._AuthService.UpdateMe(this.userForm.value).subscribe({
        next: (res) => {
          console.log('تم تحديث الاسم بنجاح!', res);
          this.goToEditUser(0)
        },
        error: (err) => {
          console.error('خطأ في تحديث الاسم:', err);
        }
      });
    }
  }
}
