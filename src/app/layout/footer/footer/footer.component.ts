import { Component } from '@angular/core';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RoutingModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
