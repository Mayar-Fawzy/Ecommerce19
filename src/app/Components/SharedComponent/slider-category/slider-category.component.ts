import { Component, inject, OnInit } from '@angular/core';

import { CategoriesService } from '../../../core/Services/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { ICategouryIbrands } from '../../../core/interfaces/ICategouryIbrands';

@Component({
  selector: 'app-slider-category',
  imports: [CarouselModule,RoutingModule],
  templateUrl: './slider-category.component.html',
  styleUrl: './slider-category.component.scss'
})
export class SliderCategoryComponent implements OnInit {
[x: string]: any;
   categories:ICategouryIbrands[] = [];
     private readonly _CategoriesService=inject(CategoriesService);

  ngOnInit(): void {
   this._CategoriesService.getAllCategories().subscribe((res)=>{
        this.categories=res.data;
   })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout: 2900,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-circle-arrow-left"></i>', '<i class="fa-solid fa-circle-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };
}
