import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AuthService } from '../../../core/Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-address',
  imports: [],
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
   registerform:FormGroup =new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
     email:new FormControl(null,[Validators.required,Validators.email]),
     phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])  
    } 
    );
  // Updatee(){
  //   this._AuthService.UpdateMe(this.registerform.value).subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
}
