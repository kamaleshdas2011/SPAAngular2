"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var employee_service_1 = require("./employee.service");
require("rxjs/add/operator/debounceTime");
function ratingRange(min, max) {
    return function (c) {
        if (c.value != undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        }
        return null;
    };
}
function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
var EmployeeCreateComponent = /** @class */ (function () {
    function EmployeeCreateComponent(fb) {
        this.fb = fb;
        this.validationMessages = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address.'
        };
    }
    EmployeeCreateComponent.prototype.setNotification = function (notifyVia) {
        //this.employeeLoginForm.patchValue
        var phone = this.employeeLoginForm.get('phone');
        var emailGroup = this.employeeLoginForm.get('emailGroup');
        if (notifyVia === 'text') {
            phone.setValidators([forms_1.Validators.required]);
            emailGroup.clearValidators();
        }
        else {
            phone.clearValidators();
        }
        phone.updateValueAndValidity();
        phone.updateValueAndValidity();
    };
    EmployeeCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeLoginForm = this.fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            gender: '',
            annualsalary: '',
            dateofbirth: '',
            emailGroup: this.fb.group({
                email: ['', [forms_1.Validators.required, forms_1.Validators.pattern("/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/")]],
                confirmEmail: ['', forms_1.Validators.required]
            }, { validator: emailMatcher }),
            phone: '',
            notification: 'email',
            rating: ['', ratingRange(1, 5)],
        });
        this.employeeLoginForm.get('notification').valueChanges.subscribe(function (value) { return _this.setNotification(value); });
        var emailControl = this.employeeLoginForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) {
            return _this.setMessage(emailControl);
        });
    };
    EmployeeCreateComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessages[key];
            }).join(' ');
        }
    };
    EmployeeCreateComponent.prototype.save = function () {
        console.log(this.employee);
    };
    EmployeeCreateComponent = __decorate([
        core_1.Component({
            selector: 'create-employee',
            templateUrl: 'app/employee/employeeCreate.component.html',
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());
exports.EmployeeCreateComponent = EmployeeCreateComponent;
//# sourceMappingURL=employeeCreate.component.js.map