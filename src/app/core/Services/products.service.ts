import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Environment } from '../../Environments/Environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {
 
  constructor(private http: HttpClient) { }

    
    apiUrl:string=`${Environment.baseUrl}${Environment.VersionUrl}`
  
  getAllProducts(limit:number,page:number,brand?:string,category?:string,price?:number):Observable<any>{
    return this.http.get(`${this.apiUrl}products/?limit=${limit}&page=${page}`)

  }

  getProductById(id:string):Observable<any>{
    return this.http.get(`${this.apiUrl}products/${id}`)
  }
  getProductByCategory(){

  }
  getProductByBrands(){

  }
}
