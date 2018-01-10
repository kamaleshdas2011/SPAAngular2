"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getAllEmployess = function () {
        return [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualsalary: 12.5, dateofbirth: '2/12/1983' },
            { code: 'emp102', name: 'Suzi', gender: 'Female', annualsalary: 2.9, dateofbirth: '10/25/1988' },
            { code: 'emp103', name: 'Benson', gender: 'Male', annualsalary: 5.5, dateofbirth: '5/7/1990' },
            { code: 'emp104', name: 'Fluke', gender: 'Female', annualsalary: 2.5, dateofbirth: '7/2/1997' },
            { code: 'emp105', name: '8Ball', gender: 'Female', annualsalary: 2.5, dateofbirth: '7/2/1997' }
        ];
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map