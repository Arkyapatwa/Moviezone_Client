import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  constructor(private http:HttpClient) { }

  private apiUrl = environment.apiUrl;

  authenticateUser(userCredDTO: any) {
    const url = `${this.apiUrl}/user/login`;
    return this.http.post<any>(url, userCredDTO);
  }

  getUserByEmailId(emailId: string) {
    const url = `${this.apiUrl}/user/${emailId}`;
    return this.http.get<any>(url);
  }

  registerUser(userDTO: any) {
    const url = `${this.apiUrl}/user/register`;
    return this.http.post<string>(url, userDTO);
  }

}
