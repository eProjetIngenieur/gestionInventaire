import { HttpClient } from '@angular/common/http';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

  const nom = form.value.nom;
  const password =  form.value.password;
  console.log(nom,password);

  this.http.post('http://localhost:8000/api/login',{
    nom:nom,
    password:password
  }).subscribe((res)=>{
    console.log(res);
  },
  err=>{
    console.log(err);
  })
  }
}
