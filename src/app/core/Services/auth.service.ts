import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Environment } from '../../Environments/Environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { tap } from 'rxjs/operators';


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
  Addadress(userdataDetail: any): Observable<any> {
    return this._HttpClient.post(
      `${Environment.baseUrl}/api/v1/addresses`,
      userdataDetail
    ).pipe(
      tap(() => this.GetAddress()) // ✅ تحديث البيانات فورًا بعد إضافة العنوان
    );
  }
  
   city = signal<string>('');  // Signal لحفظ المدينة
   details = signal<string>('');  // Signal لحفظ التفاصيل
 
   constructor(private http: HttpClient) {}
 
   GetAddress() {
     this.http.get<any>(`${Environment.baseUrl}/api/v1/addresses`).subscribe({
       next: (res) => {
         if (res.data && res.data.length > 0) {
           const lastAddress = res.data[res.data.length - 1];
           this.city.set(lastAddress.city);  // تحديث البيانات
           this.details.set(lastAddress.details);
         } else {
           console.log('No address data available.');
         }
       },
       error: (err) => console.log(err),
     });
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
