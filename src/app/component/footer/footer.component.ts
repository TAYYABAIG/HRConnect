import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialIcons = [
    { icon: 'fa-brands fa-facebook-f', link: 'https://www.facebook.com' },
    { icon: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com' },
    { icon: 'fa-solid fa-envelope', link: 'https://www.gmail.com' },
  ];
}
