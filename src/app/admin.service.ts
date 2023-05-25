import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }

  baseApiUrl = "http://localhost:9123/api/csv/upload"

  //Loading admin details from the backend
  loadAdminDetails(): Observable<Admin[]> {
    return this.http.get<Admin[]>("http://localhost:9123/Admin/displayAdmin")
  }

  storeAdminDetails(admin: Admin): Observable<string> {
    return this.http.post("http://localhost:9123/Admin/register", admin, { responseType: 'text' })
  }

  loginAdminDetails(admin: Admin): Observable<string> {
    return this.http.post("http://localhost:9123/Admin/login", admin, { responseType: 'text' })
  }

  logoutAdminDetails(email: string): Observable<string> {
    return this.http.get("http://localhost:9123/Admin/logout/" + email, { responseType: 'text' })
  }

  adminuser(): Observable<any> {
    return this.http.get<any>("http://localhost:9123/Admin/displayAdmin");
  }

  upload(file):Observable<any> {
  
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    return this.http.post(this.baseApiUrl, formData)
}

}



