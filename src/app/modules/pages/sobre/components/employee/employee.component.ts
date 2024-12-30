import { Component, Input } from '@angular/core';
import { Employee } from '../../../../../core/models/employee';

@Component({
  selector: 'ccrl-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  @Input() employees!: Employee[];
}
