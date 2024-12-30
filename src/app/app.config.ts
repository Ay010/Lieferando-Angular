import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"lieferando-angular","appId":"1:151279401299:web:cb326e422f0dbbafe549a6","storageBucket":"lieferando-angular.firebasestorage.app","apiKey":"AIzaSyABgHUx0AajVtKDQ4rIAQAbpnJTuV4mOKo","authDomain":"lieferando-angular.firebaseapp.com","messagingSenderId":"151279401299"})), provideFirestore(() => getFirestore()),
  ],
};
