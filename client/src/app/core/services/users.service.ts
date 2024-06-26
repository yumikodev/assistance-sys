import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserResponse } from '@interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<UserResponse[]>(`${environment.apiUrl}/users`);
  }

  whoami() {
    return this.http.get<UserResponse>(`${environment.apiUrl}/users/whoami`);
  }

  register(data: UserResponse) {
    return this.http.post<UserResponse>(`${environment.apiUrl}/users`, data);
  }

  delete(id: string) {
    return this.http.delete<Record<'id', string>>(
      `${environment.apiUrl}/users/${id}`
    );
  }
}
