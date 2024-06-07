import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7051/api/employee';

  constructor(private http: HttpClient) {}

  createEmployee(employee: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.post<any>(`${this.apiUrl}/create-employee`, employee, { headers,});
  }

  getEmployees(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.get<any[]>(this.apiUrl + '/getall-employee', { headers });
  }
}
