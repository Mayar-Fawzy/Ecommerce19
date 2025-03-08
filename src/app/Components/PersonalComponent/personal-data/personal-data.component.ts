import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { AuthService } from '../../../core/Services/auth.service';

@Component({
  selector: 'app-personal-data',
  standalone: true, 
  imports: [RoutingModule, NzTabsModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss',
})
export class PersonalDataComponent {
  @Output() tabChange = new EventEmitter<number>();

  protected readonly _AuthService = inject(AuthService);

  
  userEmail = signal<string>(localStorage.getItem('EmailUser') || '');
  city = this._AuthService.city; 
  details = this._AuthService.details;

  goToEditUser(num: number) {
    this.tabChange.emit(num);
  }

  constructor() {
    this._AuthService.GetAddress(); 
  }
}
