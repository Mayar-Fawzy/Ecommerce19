import { Component, inject } from '@angular/core';
import { CartService } from '../../core/Services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';
import { CurrencyPipe } from '@angular/common';
import { CutPipe } from '../../core/Pipes/cut.pipe';

@Component({
  selector: 'app-cart',
  imports: [RoutingModule, CurrencyPipe, CutPipe],
  templateUrl: './cart.component.html',
  styleUrls: [
    '../../core/Shared/Css/SharedStylee.css',
    './cart.component.scss',
  ],
})
export class CartComponent {
  isloading: boolean = true;
  private readonly _CartService = inject(CartService);
  ProductsInCart: Icart = {} as Icart;
  ngOnInit(): void {
    this.ShowProductsInCart();
  }
  ShowProductsInCart() {
    this._CartService.GetProductsCart().subscribe(({ data }) => {
      this.isloading = false;
      this.ProductsInCart = data;
     
      console.log(this.ProductsInCart);
    });
  }
  RemoveAll() {
    this._CartService.RemoveAll().subscribe((res) => {
      this._CartService.countNumber.set(res.numOfCartItems);
      if (res.message == 'success') {
        this.ProductsInCart = {} as Icart;
        this._CartService.countNumber.set(0);
      }
    });
  }
  Remove(id: string) {
    this._CartService.DeleteItem(id).subscribe((res) => {
      this.ProductsInCart = res.data;
      this._CartService.countNumber.set(res.numOfCartItems);
      console.log(this.ProductsInCart);
    });
  }
  UpdateCount(id: string, MaxCount: number) {
    this._CartService.QuantityForCount(id, MaxCount).subscribe(({ data }) => {
      this.ProductsInCart = data;
    });
  }
}
