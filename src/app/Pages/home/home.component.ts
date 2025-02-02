import { Component } from '@angular/core';
import { SliderHeaderComponent } from '../../Components/SharedComponent/slider-header/slider-header.component';
import { SliderCategoryComponent } from '../../Components/SharedComponent/slider-category/slider-category.component';

@Component({
  selector: 'app-home',
  imports: [SliderHeaderComponent,SliderCategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
