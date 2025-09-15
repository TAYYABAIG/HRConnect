import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    {
      title: 'Attendance',
      id: "employee",
      desc: `Improve time management of your entire workforce and cover all types of employee absences.`
    },
    {
      title: 'Employee Management',
      id: "employee",
      desc: `Spreadsheets are multi-dimensional. But people are not. HR Connect’s employee module makes it simple.`
    },
    {
      title: 'Payroll',
      id: "payroll",
      desc: `To create a smooth payment flow for employees, HR Connect includes a payroll option with automation.`
    },
    {
      title: 'Pms',
      id: "Pms",
      desc: `Transform your business into a high-performing workforce. . The difference between..`,
    },
    {
      title: 'Performance',
      id: "performance",
      desc: `Track employee performance with real-time insights and detailed reports.`
    },
  ];

  // Active card index
  activeIndex = signal<number | null>(0); // default: first card active

  setActive(index: number) {
    this.activeIndex.set(index);
  }
}
