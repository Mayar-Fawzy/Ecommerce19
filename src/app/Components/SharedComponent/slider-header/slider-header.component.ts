import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider-header',
  imports: [CarouselModule],
  templateUrl: './slider-header.component.html',
  styleUrl: './slider-header.component.scss',
})
export class SliderHeaderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    items:1
  };
}
