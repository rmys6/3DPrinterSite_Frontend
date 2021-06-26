import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.createLoginForm();
  }


  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){

    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }

  print(){
    console.log("asfsafsafs")
  }
}
