import { Component, inject } from '@angular/core';
import { SliderHeaderComponent } from '../../Components/SharedComponent/slider-header/slider-header.component';
import { SliderCategoryComponent } from '../../Components/SharedComponent/slider-category/slider-category.component';
import { CardProductComponent } from '../../Components/Products/card-product/card-product.component';
import { ProductsService } from '../../core/Services/products.service';
import { ICardProducts } from '../../core/interfaces/card-products';

@Component({
  selector: 'app-home',
  imports: [SliderHeaderComponent,SliderCategoryComponent,CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ProductList:ICardProducts[]=[];
  private readonly _ProductsService=inject(ProductsService);

ngOnInit(): void {
this. _ProductsService.getAllProducts(10,2).subscribe((res)=>{
     this.ProductList=res.data;
     console.log(this.ProductList[0].category.name)
    
})
}

}
