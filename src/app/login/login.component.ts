import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userName: String;
 password:String;
  constructor() {

    this.userName ="";
    this.password="";
  }

  ngOnInit() {
  }
  onSubmit(){
    alert('hi how are you');
  }
}
