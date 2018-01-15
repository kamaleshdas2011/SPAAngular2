import { Component, OnInit } from '@angular/core';
import { IEmployee, Employee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css'],
    providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {

    employee: IEmployee;
    serviceStatus: string = "Loading data. Please wait.";

    ngOnInit() {
        let empCode: string = this._activateroute.snapshot.params['code'];
        this._service.getEmployeeByCode(empCode).subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.serviceStatus = "Employee does not exists.";
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.serviceStatus = "Error occurred, please try again."
            }
        );
    }


    constructor(private _service: EmployeeService, private _activateroute: ActivatedRoute) {
    }

}