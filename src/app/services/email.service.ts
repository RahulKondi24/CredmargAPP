import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://localhost:7051/api/email';

  constructor(private http: HttpClient) {}

  sendEmails(vendorEmails: string[]): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.post<any>(`${this.apiUrl}/send-emails`, vendorEmails,{headers});
  }

  getSentEmails(): Observable<any> {

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.get<any>(this.apiUrl + '/getall-emails',{headers});
  }
}
