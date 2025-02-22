import { Component, inject, Input } from '@angular/core';
import {  ICardProducts } from '../../../core/interfaces/card-products';
import { CurrencyPipe } from '@angular/common';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { CutPipe } from '../../../core/Pipes/cut.pipe';
import { WishlistService } from '../../../core/Services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../core/Services/cart.service';
import { Icart } from '../../../core/interfaces/icart';
@Component({
  selector: 'app-card-product',
  imports: [CurrencyPipe, RoutingModule,CutPipe],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent{
  @Input() CardProducts: ICardProducts []=[];
   WishLisst:Icart[]=[]
  msgError!: string;
   private readonly _ActivatedRoute = inject(ActivatedRoute);
    private readonly _Router = inject(Router);
   private readonly _CartService = inject(CartService);
   private readonly _ToastrService = inject(ToastrService);
 
  private readonly _WishlistService=inject(WishlistService);

  constructor(){}
  

 
  addToWishList(productId: string) {
    this._WishlistService.Addproducttowishlist(productId).subscribe({
      next: (data) => {
           this.WishLisst=data
          this._WishlistService.addNumToWishlist();
          console.log('WishList' ,this.WishLisst);
          console.log( this._WishlistService.wishlistNumber())
        

      },

      error: (err) => {
        console.log(err);
      },
    });
  }
  addToCart(productId: string) {
    this._CartService.addProductToCart(productId).subscribe({
      next: (data) => {
        this._CartService.countNumber.set(data.numOfCartItems);
        this._ToastrService.success('Product added to cart', 'FreshCart', {timeOut: 3000});
        
      },

      error: (err) => {
        console.log(err);
        this.msgError = err.error.message;
        this._ToastrService.error(this.msgError, 'FreshCart', {timeOut: 2000});
        this._Router.navigate(['/auth/login']);
      },
    });

}  }

 
