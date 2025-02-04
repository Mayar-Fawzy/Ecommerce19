

import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICategouryIbrands } from '../../../core/interfaces/ICategouryIbrands';


@Component({
  selector: 'app-header-type-product',
  imports: [],
  templateUrl: './header-type-product.component.html',
  styleUrl: './header-type-product.component.scss'
})
export class HeaderTypeProductComponent {
  
  @Input() CardCategouryDetHeader: ICategouryIbrands | null = null;
   
}
