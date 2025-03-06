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
import { ProductsService } from '../../core/Services/products.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-wishlist',
  imports: [RoutingModule, CurrencyPipe, CutPipe,NgxSkeletonLoaderModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  private readonly _WishlistService=inject(WishlistService);
  private readonly _CartService = inject(CartService);
   private readonly _ToastrService = inject(ToastrService);
     private readonly _Router = inject(Router);
  WishLisst: ICardProducts[] = [];
   page:number=1;
   msgError!: string;
    isloading: boolean = true;
    ngOnInit(): void {
      this.ShowProductsInCart();
    
    }
    ShowProductsInCart() {
    this._WishlistService.GetProductswishlist().subscribe((res)=>{
    this.WishLisst=res.data;
    this._WishlistService.countNumberWish.set(res.count);
    
    this.isloading=false;
      console.log("CounttWishList",res.count);
    console.log("LOVEliSt",this.WishLisst);
   })
    }
    
    // RemoveAll() {
    //   Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!',
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire({
    //         title: 'Deleted!',
    //         text: 'Your file has been deleted.',
    //         icon: 'success',
    //       }); 
    //        this._WishlistService.RemoveAll().subscribe((res) => {

    //     // this._WishlistService.countNumber.set(res.numOfCartItems);
    //     this.WishLisst = [];
    //     this.ShowProductsInCart();
    //     console.log(this.WishLisst);

    //     if (res.status == 'success') {
    //       this.WishLisst = [];
    //       // this._CartService.countNumber.set(0);
    //     }
    //   });
    //     }
    //   });
    
    // }
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
        this._WishlistService.countNumberWish.set(res.count);
        this.ShowProductsInCart();
  
        // this._CartService.countNumber.set(res.numOfCartItems);
        console.log(this.WishLisst);
      });
        }
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
  
  }
}
