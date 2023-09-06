import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl = environment.BASE_URL + 'admin/';

  constructor(private http: HttpClient) {}

  addAdmin(addPayload: any) {
    return this.http.post<any>(this.apiUrl + 'registration', addPayload);
  }

  getAllAdmin(): Observable<Admin[]> {
    return this.http.get<any>(this.apiUrl + 'get-all-admin-list');
  }

  editAdminById(id: any, editPayload: any) {
    return this.http.put(this.apiUrl + `edit-admin-by-id/${id}`, editPayload);
  }

  deleteAdminById(id: any) {
    return this.http.delete(this.apiUrl + `delete-admin-by-id/${id}`);
  }
}
