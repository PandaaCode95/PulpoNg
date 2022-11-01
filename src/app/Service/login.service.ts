import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string = "";
  public user!:User;

  constructor(private http:HttpClient) { }
  
  login(user:User):Observable<Object>{
      
      this.url="http://localhost:3000/login"
     return this.http.post(this.url,user);
  }
}
