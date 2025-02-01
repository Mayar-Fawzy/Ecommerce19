import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
   private _HttpClient=inject(HttpClient)
  constructor(){ }
  getAll<T>(ApiUrl:string,limit:number,page:number,brand?:string,category?:string):Observable<any> {
    
    let queryParams =`?limit=${limit}&page=${page}&brand=${brand}&&category[in]=${category}`
    return this._HttpClient.get<T>(`${ApiUrl}+${queryParams}`);
  }
  GetOne<T>(ApiUrl:string,id:string):Observable<any>{
       return this._HttpClient.get<T>(`${ApiUrl}/${id}`);
  }
  
}
