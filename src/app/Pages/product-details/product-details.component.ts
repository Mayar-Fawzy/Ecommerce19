import {
  Component,
  inject,
  OnInit,
  
} from '@angular/core';
import { ISpecificProduct } from '../../core/interfaces/specific-product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/Services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CutPipe } from '../../core/Pipes/cut.pipe';
import { CartService } from '../../core/Services/cart.service';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule, CommonModule, CutPipe, CurrencyPipe,RoutingModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CartService = inject(CartService);
  specificProduct:ISpecificProduct= {} as ISpecificProduct;

  productId: string | null = null;
  imageUrl!: string;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('productId');

      if (!this.productId) {
        console.error('Error: productId is null or undefined.');
        return;
      }

      console.log('productId ID from ngOnInit:', this.productId);

      // Fetch product data
      this.getListProduct(this.productId);
    });
  }

  getListProduct(productId: string): void {
    this._ProductsService.getProductById(productId).subscribe({
      next: ({ data }) => {
        this.specificProduct=data;
           
        this.imageUrl = this.specificProduct.imageCover; 
        console.log('Fetched specificProduct Data:', this.specificProduct);
      },
      error: (err) => {
        console.error('Error fetching product by ID:', err);
      },
    });
  }

  changeBackground(imageUrl: string): void {
    this.imageUrl = imageUrl; // Change background image
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-circle-arrow-left" style="color: gray; padding: 150px;"></i>',
      '<i class="fa-solid fa-circle-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 4,
      },
      740: {
        items: 5,
      },
      940: {
        items: 8,
      },
    },
  };
  addToCart(productId: string) {
    this._CartService.addProductToCart(productId).subscribe({
      next: (data) => {
        this._CartService.countNumber.set(data.numOfCartItems);
        console.log(
          'Product added to cart:',
          data,
          'Conutt=',
          data.numOfCartItems
        );
      },

      error: (err) => {
        console.log(err);
      },
    });

}  }
 
