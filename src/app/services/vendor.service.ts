import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  private apiUrl = 'https://localhost:7051/api/vendor';

  constructor(private http: HttpClient) {}

  createVendor(vendor: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.post<any>(`${this.apiUrl}/create-vendor`, vendor, { headers});
  }

  getVendors(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.get<any[]>(this.apiUrl + '/getall-vendors', { headers });
  }
}
