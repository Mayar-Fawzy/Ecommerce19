import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { AuthService } from '../../../core/Services/auth.service';

@Component({
  selector: 'app-personal-data',
  standalone: true, // اجعل المكون Standalone وفقًا لمعايير Angular 18
  imports: [RoutingModule, NzTabsModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss',
})
export class PersonalDataComponent {
  @Output() tabChange = new EventEmitter<number>();

  private readonly _AuthService = inject(AuthService);

  // ✅ اجعل البيانات Signals لتحديثها تلقائيًا بدون الحاجة لـ reload
  userEmail = signal<string>(localStorage.getItem('EmailUser') || '');
  userName = signal<string>(this._AuthService.saveuserdata().name || '');
  city = this._AuthService.city; // يفترض أنها Signal داخل AuthService
  details = this._AuthService.details; // يفترض أنها Signal داخل AuthService

  goToEditUser(num: number) {
    this.tabChange.emit(num);
  }

  constructor() {
    this._AuthService.GetAddress(); // ✅ استدعاء البيانات مباشرة عند تحميل المكون
  }
}
