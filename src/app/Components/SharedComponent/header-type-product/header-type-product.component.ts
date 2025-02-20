

import { Component, Input } from '@angular/core';
import { SpecificCategoury } from '../../../core/interfaces/specific-categoury';
import { DatePipe } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@Component({
  selector: 'app-header-type-product',
  imports: [DatePipe,NgxSkeletonLoaderModule],
  templateUrl: './header-type-product.component.html',
  styleUrl: './header-type-product.component.scss'
})
export class HeaderTypeProductComponent {
  @Input() isloadingH!:boolean;
  @Input() CardCategouryDetHeader: SpecificCategoury ={} as SpecificCategoury;
   
}
