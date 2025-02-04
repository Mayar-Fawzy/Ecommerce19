import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';


@Component({
  selector: 'app-card-category-and-brands',
  imports: [RoutingModule, DatePipe],
  templateUrl: './card-category-and-brands.component.html',
  styleUrl: './card-category-and-brands.component.scss',
})
export class CardCategoryAndBrandsComponent {
  constructor() {}

  @Input() CardCategoury: ICategouryIbrands[] = [];
}
