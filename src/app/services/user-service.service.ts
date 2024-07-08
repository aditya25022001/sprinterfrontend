import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL:String = "http://localhost:5000/api/v1/user"

  constructor(private http:HttpClient) { }

  login(email:String, password:String): Observable<Login> {
    return this.http.post<Login>(`${this.URL}/login`,{ email, password }, httpOptions);
  }

}