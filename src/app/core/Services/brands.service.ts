import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Environments/Environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BrandsService{
  apiUrl:string=`${Environment.baseUrl}${Environment.VersionUrl}`
    constructor(private http: HttpClient) { }
   getAllbrands():Observable<any>{
     return this.http.get(`${this.apiUrl}brands`)
 
   }
   getbrandsById(id:string):Observable<any>{
     return this.http.get(`${this.apiUrl}brands/${id}`)
   }
   getProductOfbrand(brandId?:string):Observable<any>{
    return this.http.get(`${this.apiUrl}products?brand[in]=${brandId}`)
  }
  getCategoriesById(id:string):Observable<any>{
    return this.http.get(`${this.apiUrl}categories/${id}`)
  }
  }