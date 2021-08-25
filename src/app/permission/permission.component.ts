import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Menu } from '../menu.model';
import { SousMenu } from '../sousMenu.model';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {


  dataMenu:any;
  data:any;

  menu = new Menu();

  sous = new SousMenu();

  constructor(private as:ApiService) { }

  ngOnInit(): void {
    
  }

  getMenuData()
{
  this.as.getMenuData().subscribe(res=>
    {
      this.dataMenu=res;
    })
}

getsousMenu(){
  this.as.getsousMenu().subscribe(res=>
    {
      this.data=res;
    })
}

  addMenu(){
    this.as.addMenu(this.menu).subscribe(res=>{
    this.getMenuData();
    }) 

    this.as.addsousMenu(this.sous).subscribe(res=>{
      this.getsousMenu();
      }) 
  
  }


  
    
}
