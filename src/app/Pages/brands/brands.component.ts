import { Component, inject } from '@angular/core';
import { BrandsService } from '../../core/Services/brands.service';
import { ICategouryIbrands } from '../../core/interfaces/ICategouryIbrands';
import { CardBrandsComponent } from "../../Components/card-brands/card-brands.component";

@Component({
  selector: 'app-brands',
  imports: [ CardBrandsComponent],
  templateUrl: './brands.component.html',
  styleUrls: [ '../../core/Shared/Css/SharedStylee.css','./brands.component.scss'],
})
export class BrandsComponent {
  isloading:boolean=true
  BrandList: ICategouryIbrands[] = [];
  private readonly _BrandsService = inject(BrandsService);

  ngOnInit(): void {
    this._BrandsService.getAllbrands().subscribe((res) => {
      this.BrandList = res.data;
      this.isloading=false
    });
  }
}
