import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Environments/Environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() {}
  CheckOut(cartId: string | null, shippingAddress: object): Observable<any> {
    return this._HttpClient.post(
      `${Environment.baseUrl}${Environment.VersionUrl}orders/checkout-session/${cartId}?url=${Environment.url}`,
      { shippingAddress: shippingAddress }
    );
  }
}
