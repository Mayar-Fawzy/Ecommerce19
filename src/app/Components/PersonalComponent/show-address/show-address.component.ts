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
 
  
}
