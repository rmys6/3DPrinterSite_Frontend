import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  status:boolean;
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
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
      console.log(this.loginForm.value);

      let loginModel = Object.assign({},this.loginForm.value);
      this.authService.login(loginModel).subscribe(response => {
        console.log(response)
        localStorage.setItem("token",response.data.token)
        this.status=response.success;
        this.router.navigate(['home']);
      },responseError=>{
        console.log(responseError)
      })
    }
  }
}