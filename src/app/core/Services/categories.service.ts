import { Injectable } from '@angular/core';
import { Environment } from '../../Environments/Environment';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService  { 

   apiUrl:string=`${Environment.baseUrl}${Environment.VersionUrl}`
   constructor(private http: HttpClient) { }
  getAllCategories():Observable<any>{
    return this.http.get(`${this.apiUrl}categories`)

  }
  getProductOfCategoury(categoryId?:string):Observable<any>{
    return this.http.get(`${this.apiUrl}products?category[in]=${categoryId}`)
  }
  getCategoriesById(id:string):Observable<any>{
    return this.http.get(`${this.apiUrl}categories/${id}`)
  }
}
  

