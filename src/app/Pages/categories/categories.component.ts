import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/Services/products.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';
import { CategoriesService } from '../../core/Services/categories.service';
import { BrandsComponent } from '../brands/brands.component';
import { CardCategoryComponent } from '../../Components/card-category/card-category.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true, // إذا كنت تستخدم Angular 17+ مع standalone components
  imports: [CardCategoryComponent, CommonModule], // تأكد من استيراد الوحدات المطلوبة
  templateUrl: './categories.component.html',
  styleUrls: [ '../../core/Shared/Css/SharedStylee.css','./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  isloading:boolean=true
  CategourisList: ICategouryIbrands[] = [];
  private readonly _CategoriesService = inject(CategoriesService);
   

  ngOnInit(): void {this.GetAll()}
  
  GetAll(){
    this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.CategourisList = res.data;
        this.isloading=false
      },
      error: (err) => {
        console.error('Error fetching all categories:', err);
      },
    });
  }
 
}