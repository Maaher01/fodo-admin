import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.BASE_URL + 'user/';

  constructor(private http: HttpClient) {}

  addUser(addPayload: any) {
    return this.http.post<any>(this.apiUrl + 'registration', addPayload);
  }

  getAllUsers() {
    let params = new HttpParams();
    return this.http.get<any>(this.apiUrl + 'get-all-user-list', { params });
  }

  deleteUserById(id: any) {
    return this.http.delete(this.apiUrl + `delete-user-by-id/${id}`);
  }
}
