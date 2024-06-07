import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  newEmployee = { name: '', designation: '', ctc: 0, email: '' };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.employeeService.createEmployee(this.newEmployee).subscribe(() => {
      this.getEmployees();
      this.newEmployee = { name: '', designation: '', ctc: 0, email: '' };
    });
  }
}
