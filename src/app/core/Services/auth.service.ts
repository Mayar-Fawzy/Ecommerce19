import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from '../../Environments/Environment';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _HttpClient=inject(HttpClient)

  login(userdata:any):Observable<any>{
    return  this._HttpClient.post(`${Environment.baseUrl}/api/v1/auth/signin`,userdata)
  }
  userData = new BehaviorSubject<any>(null); // BehaviorSubject to store user data
 register(userdata:any):Observable<any>{
    return  this._HttpClient.post(`${Environment.baseUrl}/api/v1/auth/signup`,userdata)
  }
  constructor() {
    this.saveuserdata(); // Load user data on service initialization
  }

  saveuserdata(): void {
    const token = localStorage.getItem('userToken');
    if (token !== null) {
      try {
        this.userData.next(jwtDecode(token)); // Decode and update BehaviorSubject
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }
 

  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null); // Clear user data on logout
  }
}
