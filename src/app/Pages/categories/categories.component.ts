import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/Services/products.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';
import { CategoriesService } from '../../core/Services/categories.service';
import { BrandsComponent } from '../brands/brands.component';
import { CardCategoryComponent } from '../../Components/card-category/card-category.component';

@Component({
  selector: 'app-categories',
  imports: [CardCategoryComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  CategourisList: ICategouryIbrands[] = [];
  private readonly _CategoriesService = inject(CategoriesService);

  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe((res) => {
      this.CategourisList = res.data;
    });
  }
}
