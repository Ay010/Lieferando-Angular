import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { YourAdvantagesComponent } from './your-advantages/your-advantages.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    HowToOrderComponent,
    YourAdvantagesComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
