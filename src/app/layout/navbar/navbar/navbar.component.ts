import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { CartService } from '../../../core/Services/cart.service';
import { WishlistService } from '../../../core/Services/wishlist.service';
import { AuthService } from '../../../core/Services/auth.service';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-navbar',
  imports: [RoutingModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isopen:boolean=false;
 
  
  Show: boolean = false;
  toggleMenue(){
    this.isopen=!this.isopen;
  }
  toggleShow() {
    this.Show = !this.Show;
    
  }
  private readonly _CartService = inject(CartService);
  private readonly _Router = inject(Router);
  private readonly _AuthService = inject(AuthService);
  private readonly _WishlistService = inject(WishlistService);
  
  countt: Signal<number> = computed(() => this._CartService.countNumber());
   
  counttWish: Signal<number> = computed(() => this._WishlistService.countNumberWish());
  islogin=this._AuthService.getuserlogged()
  userName: string = '';
  userEmail: string = '';
  ngOnInit(): void {
  
  
    this._CartService.GetProductsCart().subscribe({
      next: (res) => {
        console.log('cart items', res);
        this._CartService.countNumber.set(res.numOfCartItems);
      },
    });
    this._WishlistService.GetProductswishlist().subscribe({
      next: (res) => {
        console.log('wishlist items', res);
        this._WishlistService.countNumberWish.set(res.count);
      },
    });
    this.userEmail = localStorage.getItem('EmailUser')!;
    
  }
 
  //cart Products
  //علشان الرقم يفضل ثابت حتي لو انتقلت من اي comp
  logout(){  
   
    this._AuthService.logout();

    this._Router.navigate(['/auth/login']);
  }
}
