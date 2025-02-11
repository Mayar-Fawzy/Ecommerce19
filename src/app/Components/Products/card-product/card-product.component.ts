import { Component, inject, Input } from '@angular/core';
import {  ICardProducts } from '../../../core/interfaces/card-products';
import { CurrencyPipe } from '@angular/common';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { CutPipe } from '../../../core/Pipes/cut.pipe';
import { WishlistService } from '../../../core/Services/wishlist.service';
@Component({
  selector: 'app-card-product',
  imports: [CurrencyPipe, RoutingModule,CutPipe],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent{
  @Input() CardProducts: ICardProducts []=[];


 
  private readonly _WishlistService=inject(WishlistService);

  constructor(){}
  

 
  addToWishList(productId: string) {
    this._WishlistService.Addproducttowishlist(productId).subscribe({
      next: (data) => {
       
          this._WishlistService.addNumToWishlist();
          console.log( this._WishlistService.wishlistNumber())
        

      },

      error: (err) => {
        console.log(err);
      },
    });
  }

 }
