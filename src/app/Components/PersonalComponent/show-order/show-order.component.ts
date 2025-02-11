import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../../core/Services/order.service';
@Component({
  selector: 'app-show-order',
  imports: [ReactiveFormsModule],
  templateUrl: './show-order.component.html',
  styleUrl: './show-order.component.scss'
})
export class ShowOrderComponent {
  private readonly _ActivatedRoute=inject(ActivatedRoute);
  private readonly _OrdersService=inject(OrderService);
  orders:FormGroup=new FormGroup({
    details:new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl('')
   })
  //جبت الديتلز بتاعت الكارت
   ordersSubmit():void{
    console.log(this.orders.value);
     this._OrdersService.CheckOut(this.myId,this.orders.value).subscribe({
       next: (res) => {
         if(res.status=='success'){
          //  strip => payment in backend
           window.open(res.session.url,'_self');
         }
         console.log(res)
       },
       error: (err) => console.error(err),
     })
   }
 
    myId:string|null='';
    //هروح اجيب ال id من الurl
  
   ngOnInit(): void {
     this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
      this.myId=params.get('orderId');
      console.log(this.myId)
      }
     })
   }
}
