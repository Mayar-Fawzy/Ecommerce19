import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ShowAddressComponent } from '../show-address/show-address.component';
import { AuthService } from '../../../core/Services/auth.service';

@Component({
  selector: 'app-personal-data',
  imports: [RoutingModule, NzTabsModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss',
})
export class PersonalDataComponent {
  @Output() tabChange = new EventEmitter<number>();

  goToEditUser(num: number) {
    this.tabChange.emit(num);
  }

  private readonly _AuthService = inject(AuthService);
  userEmail: string = localStorage.getItem('EmailUser')!;
  userName: string = this._AuthService.saveuserdata().name;
}
