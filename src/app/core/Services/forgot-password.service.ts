import { Injectable } from '@angular/core';
import { Environment } from '../../Environments/Environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  // forgetPassword
  // resetPassword
  // verifyRestCode
  apiUrl:string=`${Environment.baseUrl}${Environment.VersionUrl}`;
   constructor(private http: HttpClient) { }
  forgetPassword(email:any):Observable<any>{
    return this.http.post(`${this.apiUrl}auth/forgotPasswords`,email);
  }
  resetPassword(dataa:any):Observable<any>{
      return this.http.put(`${this.apiUrl}auth/resetPassword`,dataa);
  }
  verifyRestCode(resetCode:any):Observable<any>{
    return this.http.post(`${this.apiUrl}auth/verifyResetCode`,resetCode);
  }
}
