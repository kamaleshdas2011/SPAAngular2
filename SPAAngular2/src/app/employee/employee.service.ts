import { Injectable } from '@angular/core';
import { IEmployee, Employee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) {

    }

    getAllEmployees(): Observable<IEmployee[]>{
        return this._http.get("http://localhost:31704/api/employee")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }
    getEmployeeByCode(code: string): Observable<IEmployee> {
        return this._http.get("http://localhost:31704/api/employee/" + code)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}