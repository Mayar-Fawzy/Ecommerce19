import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';

@Component({
  selector: 'app-card-brands',
  imports: [RoutingModule, DatePipe],
  templateUrl: './card-brands.component.html',
  styleUrl: './card-brands.component.scss'
})
export class CardBrandsComponent {

  constructor() {}

  @Input() BrandListt: ICategouryIbrands[] = [];
}
