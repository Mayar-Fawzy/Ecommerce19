
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID); // الحصول على PLATFORM_ID
  const isBrowser = isPlatformBrowser(platformId); // التحقق من أن الكود يعمل في المتصفح

  let token: string | null = null;

  if (isBrowser) {
    token = localStorage.getItem('userToken'); // استخدام localStorage فقط في المتصفح
  }

  // إضافة الهيدر إذا كان الرمز (token) موجودًا والطلب يتعلق بـ cart أو wishlist أو orders
  if (token != null) {
    if (req.url.includes('cart') || req.url.includes('wishlist') || req.url.includes('orders')||req.url.includes('updateMe')||req.url.includes('addresses')||req.url.includes('changeMyPassword')) {
      req = req.clone({
        setHeaders: { token }
      });
    }
  } return next(req);
}
 
 
