import { Component, inject } from '@angular/core';
import { CartService } from '../../core/Services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private readonly _CartService=inject(CartService);
  ProductsInCart:any[]=[];
  ngOnInit(): void {
    this.ShowProductsInCart();
    
  }
  ShowProductsInCart(){
    this._CartService.GetProductsCart().subscribe((data)=>{
        this.ProductsInCart=data;
        console.log(this.ProductsInCart);
    })
  }

}
