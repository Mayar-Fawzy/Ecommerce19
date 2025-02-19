import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { headersInterceptor } from './core/interceptors/headers.interceptor';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(),
    withInterceptors([headersInterceptor])) ,
    provideAnimations(),
    provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
      provideToastr({
        timeOut: 3000, // مدة الإشعار
        positionClass: 'toast-top-right', // مكان الإشعار
        preventDuplicates: true, // منع التكرار
      })],
    
};
