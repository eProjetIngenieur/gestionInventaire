import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user.model';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MustMatch } from '../confirmed.validators';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form!:FormGroup;
  submitted=false;
  dataArr:any;
  grpArr:any;
  GroupArr:any;
  userArr:any;
  data:any;

  user = new User();
  constructor(private as:ApiService ,private formBuilder:FormBuilder, private toastr: ToastrService) { }

 
  createUser(){
    this.form =this.formBuilder.group({
      name:[null, Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      confirmPassword:['', Validators.required],
      roles:['',Validators.required]

    }, {
      validators: MustMatch('password','confirmPassword')
    });
  }
  
  ngOnInit(): void {
    this.getUserData();
    this.getGroup();
    this.createUser();
  }

get f(){
    return this.form.controls;
}

submit(){
  this.submitted = true;
  if(this.form.invalid){
    return;
  }
  this.as.registerUser(this.form.value).subscribe(res=>{
    this.data= res;
    
    if(this.data.status === 1){
      this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code),{
        timeOut: 2000,
        progressBar: true
      });

    }else{
      this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code),{
        timeOut: 2000,
        progressBar: true
      });
    }

    this.submitted = false;
    this.form.get('name')?.reset();
    this.form.get('email')?.reset();
    this.form.get('password')?.reset();
    this.form.get('confirmPassword')?.reset();
    this.form.get('roles')?.reset();


    });
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
