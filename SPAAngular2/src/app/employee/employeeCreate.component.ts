import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

import 'rxjs/add/operator/debounceTime';

function ratingRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value != undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        }
        return null
    }
}

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');

    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }

    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}

@Component({
    selector: 'create-employee',
    templateUrl: 'app/employee/employeeCreate.component.html',
    providers: [EmployeeService]
})



export class EmployeeCreateComponent implements OnInit {

    private validationMessages = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };
    emailMessage: string;
    employeeLoginForm: FormGroup;
    employee: Employee;

    constructor(private fb: FormBuilder) {
        
    }

    setNotification(notifyVia: string): void {
        //this.employeeLoginForm.patchValue
        
        const phone = this.employeeLoginForm.get('phone');
        const emailGroup = this.employeeLoginForm.get('emailGroup');

        if (notifyVia === 'text') {
            phone.setValidators([Validators.required]);
            emailGroup.clearValidators();
        }
        else {
            phone.clearValidators();
        }
        phone.updateValueAndValidity();
        phone.updateValueAndValidity();
    }

    ngOnInit(): void {
        this.employeeLoginForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            gender: '',
            annualsalary: '',
            dateofbirth: '',
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.pattern("/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/")]],
                confirmEmail: ['', Validators.required]
            }, { validator: emailMatcher }),
            phone: '',
            notification: 'email',
            rating: ['', ratingRange(1, 5)],

        })

        this.employeeLoginForm.get('notification').valueChanges.subscribe(
            value => this.setNotification(value)
        )
        const emailControl = this.employeeLoginForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value =>
            this.setMessage(emailControl));
    }
    setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessages[key]).join(' ');
        }
    }
    save() {
        console.log(this.employee);
    }

}