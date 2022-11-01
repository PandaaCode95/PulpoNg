import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { LoginService } from 'src/app/Service/login.service';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:User;
  constructor(public loginService:LoginService,private router:Router) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }
    public onSubmit(form:NgForm){
        
          this.loginService.login(this.user).subscribe((data:any)=>{
           
            if(!data.err){
            
              this.user.nick=data.result[0].nick;
              this.user.role=data.result[0].role;
              this.loginService.user=this.user;
              this.router.navigateByUrl('/landing')
            }
          })
        }
    }

