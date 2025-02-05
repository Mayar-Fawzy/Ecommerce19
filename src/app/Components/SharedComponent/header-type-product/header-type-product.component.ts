

import { Component, Input } from '@angular/core';
import { SpecificCategoury } from '../../../core/interfaces/specific-categoury';


@Component({
  selector: 'app-header-type-product',
  imports: [],
  templateUrl: './header-type-product.component.html',
  styleUrl: './header-type-product.component.scss'
})
export class HeaderTypeProductComponent {
  
  @Input() CardCategouryDetHeader: SpecificCategoury ={} as SpecificCategoury;
   
}
