import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../core/Services/categories.service';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';
import { DatePipe } from '@angular/common';
import { HeaderTypeProductComponent } from '../../Components/SharedComponent/header-type-product/header-type-product.component';

@Component({
  selector: 'app-product-by-categoris',
  imports: [HeaderTypeProductComponent],
  templateUrl: './product-by-categoris.component.html',
  styleUrl: './product-by-categoris.component.scss'
})
export class ProductByCategorisComponent {
  private readonly _CategoriesService = inject(CategoriesService);
  CardCategouryDet: ICategouryIbrands | null = null;

  private readonly _ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
       let idCat = params.get('CatgoryId')!;
        console.log("id: " + idCat);
        console.log("Route params:", params.keys);
        console.log("Category ID:", params.get('id'));
      
        // جلب الفئة بناءً على المعرّف
        this._CategoriesService.getCategoriesById(idCat).subscribe({
          next: (res) => {
            this.CardCategouryDet = res.data;
            console.log(this.CardCategouryDet);
          },
          error: (err) => {
            console.error('Error fetching category by ID:', err);
          },
        });
      },
      error: (err) => {
        console.error('Error reading route parameters:', err);
      },
    });
 }
}
