import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
token:any;
userData:any;
email:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.email = this.userData.email;

    console.log(this.token);
    console.log(this.userData.email);
    
  
  }

  logout(){
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
  }

}
