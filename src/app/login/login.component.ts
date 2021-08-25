import { HttpClient } from '@angular/common/http';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  submitted =false;
  data:any;
  token:any;
  userData:any;


  constructor(private router:Router, private http:HttpClient, private as: ApiService, private toastr: ToastrService, private formBuilder: FormBuilder) { }


loginForm(){
  this.form = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]]
  })
}
  ngOnInit(): void {
    this.loginForm();
  }

  get f(){
   return this.form.controls;
  }

  submit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
      this.as.login(this.form.value).subscribe(res=> {
        this.data = res;
            
          if(this.data.status === 1){

              this.token = this.data.data.token;
              
              localStorage.setItem('token', this.token);
            if(this.form.value.email ==="john1@gmail.com" ){

           
              this.router.navigate(['Admin']); 
              this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),
              {
                timeOut: 2000,
                progressBar:true
              });
            } else{
              this.router.navigate(['User']); 
              this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),
              {
                timeOut: 2000,
                progressBar:true
              });
            }
            
          }else if(this.data.status === 0) {
        
            
            
            this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),
            {
              timeOut: 2000,
              progressBar:true
            });
          }
        
      });
  }
}
