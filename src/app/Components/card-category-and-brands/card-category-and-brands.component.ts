import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CutPipe } from '../../core/Pipes/cut.pipe';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';
import {  ICategoury } from '../../core/interfaces/ICategoury';

@Component({
  selector: 'app-card-category-and-brands',
  imports: [ RoutingModule,DatePipe,CutPipe],
  templateUrl: './card-category-and-brands.component.html',
  styleUrl: './card-category-and-brands.component.scss'
})
export class CardCategoryAndBrandsComponent {
 constructor(){}
 
   @Input() CardCategoury: ICategoury[]=[] ;
}
