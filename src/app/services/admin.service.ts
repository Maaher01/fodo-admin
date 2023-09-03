import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl = environment.BASE_URL + 'admin/';

  constructor(private http: HttpClient) {}

  addAdmin(addPayload: any) {
    return this.http.post<any>(this.apiUrl + 'registration', addPayload);
  }

  getAllAdmin() {
    return this.http.get(this.apiUrl + 'get-all-admin-list');
  }

  deleteAdminById(id: any) {
    return this.http.delete(this.apiUrl + `delete-admin-by-id/${id}`);
  }
}
