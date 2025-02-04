import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';

@Component({
  selector: 'app-card-category',
  imports: [RoutingModule, DatePipe],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.scss'
})
export class CardCategoryComponent {

  constructor() {}

  @Input() CardCategoury: ICategouryIbrands[] = [];
}
