import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public loginService:LoginService) {
    
   }

  ngOnInit(): void {
  }

}
