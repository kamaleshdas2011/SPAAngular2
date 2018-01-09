import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';


@NgModule({
  imports:      [ BrowserModule ],
    declarations: [AppComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
