import { Component, computed, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  private readonly _AuthService = inject(AuthService);
  private readonly _WishlistService = inject(WishlistService);
  countt: Signal<number> = computed(() => this._CartService.countNumber());
  WishListNum: Signal<number> = computed(() =>
    this._WishlistService.wishlistNumber()
  );
  userName: string = '';
  userEmail: string = '';
  ngOnInit(): void {
    this._AuthService.userData.subscribe((user) => {
      if (user) {
        this.userEmail = user.email; // Extract email from decoded token
        this.userName = user.name;
        console.log('email' + this.userEmail);
        console.log('Name' + this.userName);
      }
      this._AuthService.getAuthSubject().subscribe({
        next:(status)=>{
          this.islogin=status
        }
      })
     
    });

    this._CartService.GetProductsCart().subscribe({
      next: (res) => {
        console.log('cart items', res);
        this._CartService.countNumber.set(res.numOfCartItems);
      },
    });
  }

  //cart Products
  //علشان الرقم يفضل ثابت حتي لو انتقلت من اي comp
}
