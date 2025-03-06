import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Environments/Environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
   private readonly _HttpClient=inject(HttpClient)
    
   countNumberWish:WritableSignal<number>=signal(0);

  constructor() { }

  Addproducttowishlist(id:string):Observable<any>{


    
       return this._HttpClient.post(`${Environment.baseUrl}/api/v1/wishlist`,
        {
          // body
          "productId":id
        }
       
       )

        }
        GetProductswishlist():Observable<any>{
          return this._HttpClient.get(`${Environment.baseUrl}/api/v1/wishlist`)
        }
        DeleteItem(id:string):Observable<any>{
          return this._HttpClient.delete(`${Environment.baseUrl}/api/v1/wishlist/${id}`)
         }
        //  RemoveAll():Observable<any>{
        //   return this._HttpClient.delete(`${Environment.baseUrl}/api/v1/wishlist`
        //    )
        //  }
         QuantityForCount(id:string , MaxCount:number):Observable<any>
         {
          return this._HttpClient.put(`${Environment.baseUrl}/api/v1/wishlist/${id}`,
            {
              // body
              "count":MaxCount
            },
            
           )
         }
}
