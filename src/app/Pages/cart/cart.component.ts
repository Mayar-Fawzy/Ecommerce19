
import { Component, inject } from '@angular/core';
import { CartService } from '../../core/Services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [RoutingModule,CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private readonly _CartService=inject(CartService);
  ProductsInCart:Icart={} as  Icart;
  ngOnInit(): void {
    this.ShowProductsInCart();
    
  }
  ShowProductsInCart(){
    this._CartService.GetProductsCart().subscribe(({data})=>{
        this.ProductsInCart=data;
        console.log(this.ProductsInCart);
    })
  }
  RemoveAll(){

  }
  Remove(id:string){

  }
  UpdateCount(t:string,s:number){

  }

}
