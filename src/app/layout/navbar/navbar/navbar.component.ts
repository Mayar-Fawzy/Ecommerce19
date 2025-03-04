import { Component, computed, inject, Signal } from '@angular/core';
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
  islogin!:boolean;
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
  WishListNum: Signal<number> = computed(() =>
    this._WishlistService.wishlistNumber()
  );
  userName: string = '';
  userEmail: string = '';
  ngOnInit(): void {
 

    this._CartService.GetProductsCart().subscribe({
      next: (res) => {
        console.log('cart items', res);
        this._CartService.countNumber.set(res.numOfCartItems);
      },
    });
    if(this._AuthService.saveuserdata()){
      this.islogin=true;
    }
    this.userEmail = localStorage.getItem('EmailUser')!;
  }

  //cart Products
  //علشان الرقم يفضل ثابت حتي لو انتقلت من اي comp
  logout(){  
    this.islogin=false;
    this._AuthService.logout();

  

    this._Router.navigate(['/auth/login']);
  }
}
