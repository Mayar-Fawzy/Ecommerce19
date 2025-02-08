import { Component, computed, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { CartService } from '../../../core/Services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RoutingModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   Show:boolean=false
   toggleShow(){
    this.Show=!this.Show;
   }
   private readonly _CartService=inject(CartService);
   countt:Signal<number>=computed(()=>this._CartService.countNumber());
   ngOnInit(): void {
    //cart Products 
    //علشان الرقم يفضل ثابت حتي لو انتقلت من اي comp
    this._CartService.GetProductsCart().subscribe({
      next:(res)=>{ 
          console.log('cart items',res);
          this._CartService.countNumber.set(res.numOfCartItems)
      }
    })
  }
}
