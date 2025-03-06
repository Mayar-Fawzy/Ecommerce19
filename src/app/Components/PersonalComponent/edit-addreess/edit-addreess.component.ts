import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/Services/auth.service';

@Component({
  selector: 'app-edit-address',
  standalone: true, // اجعل المكون Standalone وفقًا لمعايير Angular 18
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-addreess.component.html',
  styleUrls: ['../show-address/show-address.component.scss', './edit-addreess.component.scss']
})
export class EditAddressComponent {
  private readonly _AuthService = inject(AuthService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  @Output() tabChangeEditAddress = new EventEmitter<number>();

  // ✅ استخدام Signal بدلاً من متغير عادي
  _id = signal<string>('');

  userdataDetail = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null),
    city: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });

  constructor() {
    // ✅ تحديث _id تلقائيًا عند تغيير الـ route parameter
    this._ActivatedRoute.paramMap.subscribe(params => {
      this._id.set(params.get('_id') || ''); 
      console.log("id:", this._id());
    });
  }

  goToEditUser(num: number) {
    this.tabChangeEditAddress.emit(num);
  }

  UpdateAdreess() {
    if (this.userdataDetail.valid) {
      this._AuthService.Addadress(this.userdataDetail.value).subscribe({
        next: (res) => {
          console.log("تمت إضافة العنوان بنجاح:", res);
          console.log("id بعد الإضافة:", this._id());
          this.goToEditUser(0);
          this.userdataDetail.reset();
        },
        error: (err) => console.error("خطأ أثناء الإضافة:", err)
      });
    } else {
      console.warn("البيانات غير صحيحة:", this.userdataDetail.value);
    }
  }
}
