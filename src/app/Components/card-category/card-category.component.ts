import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../core/Services/categories.service';

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
