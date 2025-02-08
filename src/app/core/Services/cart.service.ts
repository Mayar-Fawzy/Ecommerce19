import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Environments/Environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private readonly _HttpClient=inject(HttpClient)
 
  countNumber:WritableSignal<number>=signal(0);

  //زرار الكارد
  addProductToCart(id:string):Observable<any>{
     return this._HttpClient.post(`${Environment.baseUrl}/api/v1/cart`,
      {
        // body
        "productId":id
      }
     
     )
      }
   GetProductsCart():Observable<any>{
     return this._HttpClient.get(`${Environment.baseUrl}/api/v1/cart`)
   }
   //Delete
   DeleteItem(id:string):Observable<any>{
    return this._HttpClient.delete(`${Environment.baseUrl}/api/v1/cart/${id}`)
   }
   RemoveAll():Observable<any>{
    return this._HttpClient.delete(`${Environment.baseUrl}/api/v1/cart`
     )
   }
   QuantityForCount(id:string , MaxCount:number):Observable<any>
   {
    return this._HttpClient.put(`${Environment.baseUrl}/api/v1/cart/${id}`,
      {
        // body
        "count":MaxCount
      },
      
     )
   }
}
