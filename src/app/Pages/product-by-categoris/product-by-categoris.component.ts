import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../core/Services/categories.service';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';
import { HeaderTypeProductComponent } from '../../Components/SharedComponent/header-type-product/header-type-product.component';
import { ICardProducts } from '../../core/interfaces/card-products';
import { CardProductComponent } from '../../Components/Products/card-product/card-product.component';
import { SpecificCategoury } from '../../core/interfaces/specific-categoury';

@Component({
  selector: 'app-product-by-categoris',
  standalone:true,
  imports: [HeaderTypeProductComponent,CardProductComponent],
  templateUrl: './product-by-categoris.component.html',
  styleUrl: './product-by-categoris.component.scss'
})
export class ProductByCategorisComponent implements OnInit {
  private readonly _CategoriesService = inject(CategoriesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
          
  CategourisList: ICardProducts[] = [];
  specificCategory: SpecificCategoury = {} as SpecificCategoury;
  idCat: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.idCat = params.get('categoryId');

      if (!this.idCat) {
        console.error("Error: categoryId is null or undefined.");
        return;
      }

      console.log("Category ID from ngOnInit:", this.idCat);

      // Fetch category data
      this.getListCategoury(this.idCat);
      this.getCategouries(this.idCat);
    });
  }

  getListCategoury(idCat: string) {
    this._CategoriesService.getProductOfCategoury(idCat).subscribe({
      next: ({ data }) => {
        this.CategourisList = data;
        console.log("Fetched Category Data:", this.CategourisList);
      },
      error: (err) => {
        console.error('Error fetching category by ID:', err);
      },
    });
  }

  getCategouries(idCat: string) {
    this._CategoriesService.getCategoriesById(idCat).subscribe({
      next: ({ data }) => {
        this.specificCategory = data;
        console.log("Fetched Products Data:", this.specificCategory);
      },
      error: (err) => {
        console.error('Error fetching products by category:', err);
      },
    });
  }
}
