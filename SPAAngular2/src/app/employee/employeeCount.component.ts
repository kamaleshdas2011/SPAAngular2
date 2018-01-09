import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})

export class EmployeeCountComponent {
    @Input()
    all: number;
    @Input()
    female: number;
    @Input()
    male: number;

    selectedFilterOption: string = 'All';

    @Output()
    countFilterSelectionChange: EventEmitter<string> = new EventEmitter<string>();

    onFilterChange() {
        this.countFilterSelectionChange.emit(this.selectedFilterOption);
        //console.log(this.selectedFilterOption);
    }
}