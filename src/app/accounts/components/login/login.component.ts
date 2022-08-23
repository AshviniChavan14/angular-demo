import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  userName: string = "";
  password : string = "";
  emailValue : string ="";
  constructor() { }

  ngOnInit(): void {
  }
  login(form : FormGroup){
    console.log(form);
  }
  Reset(form : FormGroup){
      form.reset();
  }
}
