import { Component, inject } from '@angular/core';
import { HeaderTypeProductComponent } from '../SharedComponent/header-type-product/header-type-product.component';
import { CardProductComponent } from '../Products/card-product/card-product.component';
import { ICardProducts } from '../../core/interfaces/card-products';
import { CategoriesService } from '../../core/Services/categories.service';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';
import { BrandsService } from '../../core/Services/brands.service';
import { ProductsService } from '../../core/Services/products.service';

@Component({
  selector: 'app-categories-and-brrands-details',
  imports: [HeaderTypeProductComponent,CardProductComponent],
  templateUrl: './categories-and-brrands-details.component.html',
  styleUrl: './categories-and-brrands-details.component.scss',
})
export class CategoriesAndBrrandsDetailsComponent {
  //Servues Of product and Brands
  ProductList: ICardProducts[] = [];
  CategourisList: ICategouryIbrands[] = [];
  BrandsList: ICategouryIbrands[] = [];
  private readonly _ProductsService=inject(ProductsService);
      private readonly _CategoriesService = inject(CategoriesService);
      private readonly _BrandsService = inject(BrandsService);
    
      ngOnInit(): void {
        this._CategoriesService.getAllCategories().subscribe((res) => {
          this.CategourisList = res.data;
        });
        this._BrandsService.getAllbrands().subscribe((res) => {
          this.BrandsList = res.data;
        });
      
        
      
        this. _ProductsService.getAllProducts(12,1).subscribe((res)=>{
             this.ProductList=res.data;
        
        })
        
      }
  }    

