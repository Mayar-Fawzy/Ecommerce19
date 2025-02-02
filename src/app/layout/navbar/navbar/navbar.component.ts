import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';

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
}
