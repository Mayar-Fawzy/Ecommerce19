import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { Environment } from '../../Environments/Environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends GlobalService {
  apiUrl:string;
  constructor() { 

    super()
    this.apiUrl=`${Environment.baseUrl}${Environment.VersionUrl}`
  }
  getAllProducts<P>(limit:number,page:number,brand?:string,category?:string,price?:number):Observable<any>{
    return this.getAll(`${this.apiUrl}products`,limit,page,brand,category)

  }
  getProductById<T>(id:string):Observable<any>{
     return this.GetOne(`${this.apiUrl}products`,id)
  }
  getProductByCategory(){

  }
  getProductByBrands(){

  }
}
