import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-addreess',
  imports: [],
  templateUrl: './edit-addreess.component.html',
  styleUrls: ['../show-address/show-address.component.scss','./edit-addreess.component.scss']
})
export class EditAddreessComponent {
 @Output() tabChange = new EventEmitter<number>();
 
  goToEditUser(num:number) {
    this.tabChange.emit(num);
  }
}
