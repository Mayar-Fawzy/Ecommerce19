import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../core/Services/products.service';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  // Products:any[] = [];
  //      private readonly _ProductsService=inject(ProductsService);
  
  //   ngOnInit(): void {
  //    this. _ProductsService.getAllProducts(10,1).subscribe((res)=>{
  //         this.Products=res.data;
  //    })
  //   }

}
