import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.baseUrl + 'admin/';

  constructor(private http: HttpClient) {}

  adminLogin(data: any) {
    return this.http.put(this.apiUrl + 'login', data);
  }
}
