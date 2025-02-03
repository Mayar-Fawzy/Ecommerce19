import { Component, Input } from '@angular/core';
import { ICardProducts } from '../../../core/interfaces/card-products';
import { CurrencyPipe } from '@angular/common';
import { RoutingModule } from '../../../core/Shared/Module/routing/routing.module';
import { CutPipe } from '../../../core/Pipes/cut.pipe';

@Component({
  selector: 'app-card-product',
  imports: [CurrencyPipe, RoutingModule,CutPipe],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent{
  constructor(){}

  @Input() CardProducts: ICardProducts[]=[] ;
  
  
}
