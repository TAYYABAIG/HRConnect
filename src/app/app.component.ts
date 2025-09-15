import { Component } from '@angular/core';
import * as AOS from 'aos';

import {
  HeaderComponent,
  HeroComponent,
  FeaturesComponent,
  ModulesComponent,
  ReportComponent,
  TestimonialComponent,
  PricingComponent,
  FooterComponent
} from "./component/index";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    ModulesComponent,
    ReportComponent,
    TestimonialComponent,
    PricingComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HRConnect';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,     // animation duration (ms)
      easing: 'ease-in-out', // easing
      once: false,        // whether animation should happen only once
      mirror: true        // animate when scrolling back
    });
  }

  ngAfterViewInit(): void {
    // Refresh after Angular renders view
    setTimeout(() => AOS.refresh(), 100);
  }

}
