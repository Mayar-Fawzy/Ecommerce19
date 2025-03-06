import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/Services/auth.service';
import { WishlistService } from '../../core/Services/wishlist.service';
import { CartService } from '../../core/Services/cart.service';
import Swal from 'sweetalert2';
import { ICardProducts } from '../../core/interfaces/card-products';
import { CurrencyPipe } from '@angular/common';
import { CutPipe } from '../../core/Pipes/cut.pipe';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';
import { IWishList } from '../../core/interfaces/iwish-list';
import { CardProductComponent } from "../../Components/Products/card-product/card-product.component";

@Component({
  selector: 'app-wishlist',
  imports: [RoutingModule, CardProductComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  private readonly _WishlistService=inject(WishlistService)
  WishLisst: IWishList = {} as IWishList;
   
    isloading: boolean = true;
    ngOnInit(): void {
      this.ShowProductsInCart();
    }
    ShowProductsInCart() {
    this._WishlistService.GetProductswishlist().subscribe(({data})=>{
    this.WishLisst=data
    console.log("YouE",this.WishLisst);
   })
    }
    RemoveAll() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          }); 
           this._WishlistService.RemoveAll().subscribe((res) => {
        // this._WishlistService.countNumber.set(res.numOfCartItems);
        if (res.status == 'success') {
          this.WishLisst ={} as IWishList;
          // this._CartService.countNumber.set(0);
        }
      });
        }
      });
    
    }
    Remove(id: string) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
          
      this._WishlistService.DeleteItem(id).subscribe((res) => {
        this.WishLisst = res.data;
  
        // this._CartService.countNumber.set(res.numOfCartItems);
        console.log(this.WishLisst);
      });
        }
      });
  
    }
    UpdateCount(id: string, MaxCount: number) {
      this._WishlistService.QuantityForCount(id, MaxCount).subscribe(({ data }) => {
        this.WishLisst = data;
      });
    }
}
