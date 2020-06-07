import { Component, OnInit } from '@angular/core';
import {exhaustMap} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    // const email = target.querySelector('#inputEmail').value;
    const password = target.querySelector('#inputPassword').value;
    // const email = target.getElementById('inputEmail').value;
    // const password = target.getElementById('inputPassword').value;
    console.log(password);
  }
}
