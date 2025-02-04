import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/Services/products.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CardCategoryAndBrandsComponent } from '../../Components/card-category-and-brands/card-category-and-brands.component';
import { ICategoury } from '../../core/interfaces/ICategoury';
import { CategoriesService } from '../../core/Services/categories.service';

@Component({
  selector: 'app-categories',
  imports: [CardCategoryAndBrandsComponent,NzPaginationModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
 
  page:number=1
  
CategourisList:ICategoury[]=[];
  private readonly _CategoriesService=inject(CategoriesService);

ngOnInit(): void {
this. _CategoriesService.getAllCategories().subscribe((res)=>{
     this.CategourisList=res.data;

})
}


}
