import { Component, EventEmitter, Output } from '@angular/core';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ShowAddressComponent } from "../show-address/show-address.component";

@Component({
  selector: 'app-personal-data',
  imports: [RoutingModule, NzTabsModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss',
})
export class PersonalDataComponent {
  @Output() tabChange = new EventEmitter<number>();

  goToEditUser() {
    this.tabChange.emit(1);
  }
}
