import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent {
  features = [
    { id: 'dashboard', title: 'Dashboard', desc: 'Dashboard of HR Connect shows all employee data regarding how many employees that company has, how many of them are new, how many of them are present or absent today.' },
    { id: 'loan', title: 'Loan Settlement', desc: 'HR Connect includes a loan settlement module to handle employee loans and repayments smoothly.' },
    { id: 'logs', title: 'Audit Logs', desc: 'Keep track of all of the  a loan settlement module  a loan settlement module hskjah kdjah adkh  employee-related actions and changes with complete audit logs.' },
    { id: 'payroll', title: 'Payroll', desc: 'Automated payroll system ensures smooth payment flows and compliance.' },
    { id: 'performance', title: 'Performance', desc: 'Track employee performance with real-time insights and reports.' },
    { id: 'attendance', title: 'Attendance', desc: 'Dashboard of HR Connect shows all employee data regarding how many employees that company has, how many of them are new, how many of them are present or absent today.' }
  ];

  activeIndex = signal<number>(1);   // Default first card active
  hoverIndex = signal<number | null>(null);

  setActive(i: number) {
    this.activeIndex.set(i);
  }

  setHover(i: number | null) {
    this.hoverIndex.set(i);
  }
}
