import { Component } from '@angular/core';
import { SliderHeaderComponent } from '../../Components/SharedComponent/slider-header/slider-header.component';
import { SliderCategoryComponent } from '../../Components/SharedComponent/slider-category/slider-category.component';
import { CardProductComponent } from '../../Components/Products/card-product/card-product.component';

@Component({
  selector: 'app-home',
  imports: [SliderHeaderComponent,SliderCategoryComponent,CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
