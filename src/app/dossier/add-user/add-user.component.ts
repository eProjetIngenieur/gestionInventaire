import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  dataArr:any;
  grpArr:any;
  GroupArr:any;
  userArr:any;

  user = new User();
  constructor(private as:ApiService) { }

  ngOnInit(): void {
    this.getUserData();
    this.getGroup();
  }

  getUserData()
{
  this.as.getDataUser().subscribe(res=>
    {
      this.dataArr=res;
    })
}

  insertDataUser(){
    this.as.insertDataUser(this.user).subscribe(res=>{
    this.getUserData();
    }) }


    getGroup(){
      this.as.getData().subscribe(res=>{
        this.GroupArr=res;
      })
    }

    getGroupID(event){

        var obj={
            niveau:event.target.value

        }
        this.as.getGroupID(obj).subscribe(res=>{
          this.userArr=res;  
        })
    }
   
}
