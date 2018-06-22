import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css']
})
export class LoginLogoutComponent implements OnInit {

  username:string;
  user:string;
  password :number;

  // BUTTON FUNCTION 
  onlogin():void{
  this.username= this.user;
}

  constructor() { }

  ngOnInit() {
  }

}
