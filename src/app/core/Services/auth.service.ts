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
  userData!: any;
  isLoginSign = signal<boolean>(false);
  username = signal<string>(this.saveuserdata.name); 
  private readonly _HttpClient = inject(HttpClient);
  UpdateMe(userData: any): Observable<any> {
    // /api/v1/users/updateMe/

    return this._HttpClient.put(
      `${Environment.baseUrl}/api/v1/users/updateMe/`,
      userData
    );
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
    return this._HttpClient
      .post(`${Environment.baseUrl}/api/v1/addresses`, userdataDetail)
      .pipe(
        tap(() => this.GetAddress()) // ✅ تحديث البيانات فورًا بعد إضافة العنوان
      );
  }

  city = signal<string>('Cairo'); // Signal لحفظ المدينة
  details = signal<string>('Madenet Nasser'); // Signal لحفظ التفاصيل

  constructor(private http: HttpClient) {}

  GetAddress() {
    this.http.get<any>(`${Environment.baseUrl}/api/v1/addresses`).subscribe({
      next: (res) => {
        if (res.data && res.data.length > 0) {
          const lastAddress = res.data[res.data.length - 1];
          this.city.set(lastAddress.city); // تحديث البيانات
          this.details.set(lastAddress.details);
        } else {
          console.log('No address data available.');
        }
      },
      error: (err) => console.log(err),
    });
  }
  ChangePassword(userDataa: any): Observable<any> {
    return this._HttpClient.put(
      `${Environment.baseUrl}/api/v1/users/changeMyPassword`,
      userDataa
    );
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
