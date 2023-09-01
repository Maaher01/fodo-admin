import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.BASE_URL + 'admin/';
  refreshTokenInterval: any;

  constructor(private http: HttpClient, private route: Router) {}

  login(usercred: any) {
    return this.http.put<any>(this.apiUrl + 'login', usercred);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  logout(): void {
    localStorage.removeItem('token');
    setTimeout(() => {
      clearInterval(this.refreshTokenInterval);
      this.refreshTokenInterval = null;
      this.route.navigate(['/auth/login']);
    }, 1000);
  }
}
