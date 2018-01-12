import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
    ngOnInit() {
        this._empService.getAllEmployess()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) => { this.serviceStatus = "Error occurred, please try again." }
        );
    }
    employees: Employee[];

    selectedEmployeeFilterOption: string = 'All';
    serviceStatus: string = "Loading data, please wait...";

    constructor(private _empService: EmployeeService) {
        

    }

    onEmployeeFilterChange(value: string) {
        this.selectedEmployeeFilterOption = value;
    }

    trckByEmployeeCode(index: number, emp: any): string {
        return emp.code;
    }
    getTotalEmployees(): number {
        return this.employees.length;
    }
    getTotalMaleEmployees(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }
    getTotalFemaleEmployees(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }
}