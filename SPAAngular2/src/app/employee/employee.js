"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    //computeMonthlySalary(annualsalary: number): number {
    //    return annualsalary / 12;
    //}
    function Employee(code, name, gender, annualsalary, dateofbirth, email, phone) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualsalary = annualsalary;
        this.dateofbirth = dateofbirth;
        this.email = email;
        this.phone = phone;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map