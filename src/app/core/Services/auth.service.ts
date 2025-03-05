import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Environment } from '../../Environments/Environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData!:any

  private readonly _HttpClient = inject(HttpClient);
  UpdateMe(userData:any): Observable<any>{
    // /api/v1/users/updateMe/
    const token = localStorage.getItem('userToken');

    if (!token) {
      console.error("No token found in localStorage!");
      return throwError(() => new Error("Unauthorized: No token found"));
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this._HttpClient.post(`${Environment.baseUrl}/api/v1/users/updateMe/`,this.userData, {
       headers}
    )

  }
  login(userdata: any): Observable<any> {
    return this._HttpClient.post(
      `${Environment.baseUrl}/api/v1/auth/signin`,
      userdata
    );
  }
  register(userdata: any): Observable<any> {
    return this._HttpClient.post(
      `${Environment.baseUrl}/api/v1/auth/signup`,
      userdata
    );
  }

  saveuserdata(): any {
    const token = localStorage.getItem('userToken');
    if (token !== null) {
      const decodedToken = jwtDecode(token);
      this.userData = decodedToken;
      return this.userData;
     
    }
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    this.userData = null;
 }
  getuserlogged(): boolean {
    return localStorage.getItem('userToken') ? true : false;
  }

}
