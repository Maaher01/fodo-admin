import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl = environment.BASE_URL + 'admin/';

  constructor(private http: HttpClient, private router: Router) {}

  addAdmin(addPayload: any) {
    return this.http.post<any>(this.apiUrl + 'registration', addPayload);
  }

  getAllAdmin() {
    return this.http.get(this.apiUrl + 'get-all-admin-list');
  }

  deleteAdminById(id: any) {
    return this.http.delete(this.apiUrl + `delete-admin-by-id/${id}`);
  }

  forgotPassword(payload: any) {
    return this.http.patch(this.apiUrl + 'forgot-password', payload).pipe(
      tap((res: any) => {
        this.router.navigateByUrl('/auth/login');
      })
    );
  }
}