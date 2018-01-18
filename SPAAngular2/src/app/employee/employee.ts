export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualsalary: number;
    dateofbirth: string;
    email: string;
    phone: string;

    //computeMonthlySalary(annualsalary: number): number;
}

export class Employee implements IEmployee {
    //computeMonthlySalary(annualsalary: number): number {
    //    return annualsalary / 12;
    //}
    constructor(public code: string, public name: string, public gender: string,
        public annualsalary: number, public dateofbirth: string, public email: string, public phone: string
    ) {}
}