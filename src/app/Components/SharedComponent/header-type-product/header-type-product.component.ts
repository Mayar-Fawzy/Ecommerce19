

import { Component, Input } from '@angular/core';
import { SpecificCategoury } from '../../../core/interfaces/specific-categoury';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-header-type-product',
  imports: [DatePipe],
  templateUrl: './header-type-product.component.html',
  styleUrl: './header-type-product.component.scss'
})
export class HeaderTypeProductComponent {
  
  @Input() CardCategouryDetHeader: SpecificCategoury ={} as SpecificCategoury;
   
}
