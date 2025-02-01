import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Environments/Environment';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService extends GlobalService{
  apiUrl:string;
  constructor() {

    super()
    this.apiUrl=`${Environment.baseUrl}${Environment.VersionUrl}`

   }
  getAllBrands<B>(limit:number,page:number,brand?:string,category?:string,price?:number):Observable<any>{
    return this.getAll(`${this.apiUrl}brands`,limit,page,brand,category)

  }
  getBrandsById<T>(id:string):Observable<any>{
    return this.GetOne(`${this.apiUrl}brands`,id)
  }
  
}
