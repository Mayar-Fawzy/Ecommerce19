import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { ShowAddressComponent } from "../show-address/show-address.component";
import { ChangePasswordComponent } from "../change-password/change-password.component";
import { PersonalDataComponent } from "../personal-data/personal-data.component";
@Component({
  selector: 'app-personal',
  imports: [NzTabsModule, RoutingModule, ShowAddressComponent, ChangePasswordComponent, PersonalDataComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss'
})
export class PersonalComponent {
  selectedTab = 0;
  changeTab(index: number) {
    this.selectedTab = index; // تحديث التبويب عند استدعاء الدالة
  }
}
