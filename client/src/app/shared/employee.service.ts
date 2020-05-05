import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Employee } from '../shared/employee.model';

@Injectable()
export class EmployeeService {
  // selectedEmployee is used for inserting and updating employee data in mongodb
  selectedEmployee: Employee;
  // employee variable is used for retrieving details from mongodb
  employee: Employee[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }
  getEmployeeList() {
    return this.http.get(this.baseURL);
  }
  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }
  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
