
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
    this._CartService.RemoveAll().subscribe((res)=>{
     
      this._CartService.countNumber.set(res.numOfCartItems);
      if(res.message=='success'){
        this.ProductsInCart={}as Icart
        this._CartService.countNumber.set(0);
        }
    })
  }
  Remove(id:string){
    this._CartService.DeleteItem(id).subscribe((res)=>{
      this.ProductsInCart=res.data;
      this._CartService.countNumber.set(res.numOfCartItems);
      console.log(this.ProductsInCart);
    })
  }
  UpdateCount(id:string , MaxCount:number){
    this._CartService.QuantityForCount(id,MaxCount).subscribe(({data})=>{
      this.ProductsInCart=data;
    })
  }

}
