import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.baseUrl + 'user/';
  refreshTokenInterval: any;

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any) {
    return this.http.put(this.apiUrl + 'login', data);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  logout() {
    localStorage.removeItem('token');
    setTimeout(() => {
      clearInterval(this.refreshTokenInterval);
      this.refreshTokenInterval = null;
      this.router.navigate(['/auth/login']);
    }, 1000);
  }
}
