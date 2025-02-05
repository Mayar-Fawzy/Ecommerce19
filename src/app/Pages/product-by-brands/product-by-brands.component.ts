import { Component, inject } from '@angular/core';
import { HeaderTypeProductComponent } from '../../Components/SharedComponent/header-type-product/header-type-product.component';
import { ISpecificBrand } from '../../core/interfaces/ispecific-brand';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from '../../core/Services/brands.service';
import { CardProductComponent } from '../../Components/Products/card-product/card-product.component';
import { ICardProducts, IshredCardProduct } from '../../core/interfaces/card-products';

@Component({
  selector: 'app-product-by-brands',
  imports: [HeaderTypeProductComponent, CardProductComponent],
  templateUrl: './product-by-brands.component.html',
  styleUrl: './product-by-brands.component.scss',
})
export class ProductByBrandsComponent {
  private readonly _BrandsService = inject(BrandsService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  BrandisList: ICardProducts[] = [];

  specificBrand: ISpecificBrand = {} as ISpecificBrand;
  idbrand: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.idbrand = params.get('BrandId');

      if (!this.idbrand) {
        console.error('Error: categoryId is null or undefined.');
        return;
      }

      console.log('Category ID from ngOnInit:', this.idbrand);

      // Fetch category data
      this.getListCategoury(this.idbrand);
      this.getCategouries(this.idbrand);
    });
  }

  getListCategoury(idbrand: string) {
    this._BrandsService.getProductOfbrand(idbrand).subscribe({
      next: ({ data }) => {
        this.BrandisList = data;
        console.log('Fetched Category Data:', this.BrandisList);
      },
      error: (err) => {
        console.error('Error fetching category by ID:', err);
      },
    });
  }

  getCategouries(idbrand: string) {
    this._BrandsService.getbrandsById(idbrand).subscribe({
      next: ({ data }) => {
        this.specificBrand = data;
        console.log('Fetched Products Data:', this.specificBrand);
      },
      error: (err) => {
        console.error('Error fetching products by category:', err);
      },
    });
  }
}
