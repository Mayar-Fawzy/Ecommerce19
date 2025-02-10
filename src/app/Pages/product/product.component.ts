import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { Component, inject } from '@angular/core';
import { ICardProducts } from '../../core/interfaces/card-products';
import { ProductsService } from '../../core/Services/products.service';
import { CardProductComponent } from '../../Components/Products/card-product/card-product.component';

@Component({
  selector: 'app-product',
  imports: [CardProductComponent,NzPaginationModule],
  templateUrl: './product.component.html',
  styleUrls: [ '../../core/Shared/Css/SharedStylee.css','./product.component.scss']
})
export class ProductComponent {

  page:number=1
  isloading:boolean=true
ProductList:ICardProducts[]=[];
  private readonly _ProductsService=inject(ProductsService);

ngOnInit(): void {
this. _ProductsService.getAllProducts(12,this.page).subscribe((res)=>{
  this.isloading=false
     this.ProductList=res.data;

})
}
onPageChange(page: number): void {
this.page=page;
this._ProductsService.getAllProducts(12, this.page).subscribe((res) => {
  this.ProductList = res.data;
  
});
}
}
