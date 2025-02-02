import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    RouterLinkActive,
    RouterLink,
    CommonModule,
    RouterLinkActive
  ],
  exports: [  RouterLinkActive,
    RouterLink,
    CommonModule,
    RouterLinkActive
  ]
})
export class RoutingModule { }
