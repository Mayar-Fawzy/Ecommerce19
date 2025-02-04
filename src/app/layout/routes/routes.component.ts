import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { FooterComponent } from '../footer/footer/footer.component';

@Component({
  selector: 'app-routes',
  imports: [RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent {

}
