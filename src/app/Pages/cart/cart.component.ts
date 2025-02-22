import { Component, inject } from '@angular/core';
import { CartService } from '../../core/Services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { RoutingModule } from '../../core/Shared/Module/routing/routing.module';
import { CurrencyPipe } from '@angular/common';
import { CutPipe } from '../../core/Pipes/cut.pipe';
import Swal from 'sweetalert2';

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
  getUserToken=localStorage.getItem('userToken');
  ProductsInCart: Icart = {} as Icart;
  ngOnInit(): void {
    if(this.getUserToken==undefined || this.getUserToken==null){
            this.ShowProductsInCart();
    }
    
  }
  ShowProductsInCart() {
    
    this._CartService.GetProductsCart().subscribe(({ data }) => {
      this.isloading = false;
      this.ProductsInCart = data;

      console.log(this.ProductsInCart);
    });
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
         this._CartService.RemoveAll().subscribe((res) => {
      this._CartService.countNumber.set(res.numOfCartItems);
      if (res.message == 'success') {
        this.ProductsInCart = {} as Icart;
        this._CartService.countNumber.set(0);
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
        
    this._CartService.DeleteItem(id).subscribe((res) => {
      this.ProductsInCart = res.data;

      this._CartService.countNumber.set(res.numOfCartItems);
      console.log(this.ProductsInCart);
    });
      }
    });

  }
  UpdateCount(id: string, MaxCount: number) {
    this._CartService.QuantityForCount(id, MaxCount).subscribe(({ data }) => {
      this.ProductsInCart = data;
    });
  }
}
