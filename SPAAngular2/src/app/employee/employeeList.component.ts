import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
    selector: 'employee-list',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})

export class EmployeeListComponent {
    employees: Employee[];

    selectedEmployeeFilterOption: string = 'All';

    constructor() {
        this.employees= [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualsalary: 12.5, dateofbirth: '2/12/1983' },
            { code: 'emp102', name: 'Suzi', gender: 'Female', annualsalary: 2.9, dateofbirth: '10/25/1988' },
            { code: 'emp103', name: 'Benson', gender: 'Male', annualsalary: 5.5, dateofbirth: '5/7/1990' },
            { code: 'emp104', name: 'Fluke', gender: 'Female', annualsalary: 2.5, dateofbirth: '7/2/1997' },
            { code: 'emp105', name: '8Ball', gender: 'Female', annualsalary: 2.5, dateofbirth: '7/2/1997' }
        ]
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