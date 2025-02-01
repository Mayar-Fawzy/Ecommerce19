import { Injectable } from '@angular/core';
import { Environment } from '../../Environments/Environment';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends GlobalService {
  apiUrl:string;
  constructor() {
     super()
        this.apiUrl=`${Environment.baseUrl}${Environment.VersionUrl}`
   }
  getAllCategories<C>(limit:number,page:number,brand?:string,category?:string,price?:number):Observable<any>{
    return this.getAll(`${this.apiUrl}categories`,limit,page,brand,category)

  }
  getCategoriesById<T>(id:string):Observable<any>{
    return this.GetOne(`${this.apiUrl}categories`,id)
  }
  
  
}
