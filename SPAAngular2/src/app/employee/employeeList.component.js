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
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_empService) {
        this._empService = _empService;
        this.selectedEmployeeFilterOption = 'All';
        this.employees = this._empService.getAllEmployess();
    }
    EmployeeListComponent.prototype.onEmployeeFilterChange = function (value) {
        this.selectedEmployeeFilterOption = value;
    };
    EmployeeListComponent.prototype.trckByEmployeeCode = function (index, emp) {
        return emp.code;
    };
    EmployeeListComponent.prototype.getTotalEmployees = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployees = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployees = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css'],
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map