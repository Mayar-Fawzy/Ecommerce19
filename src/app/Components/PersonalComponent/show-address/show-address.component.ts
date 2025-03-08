import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
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
  protected readonly _AuthService=inject(AuthService);

  userEmail :string= localStorage.getItem('EmailUser')!;
 
  @ViewChild('InputName') myInput!: ElementRef;
  Doo(){
    this._AuthService.username.set(this.myInput.nativeElement.value);
    console.log("Navigate",this.myInput.nativeElement.value);
     this.goToEditUser(0);
  }
  ngAfterViewInit() {
    this._AuthService.username.set(this.myInput.nativeElement.value);
    console.log("Navigate",this.myInput.nativeElement.value);
  }

}