import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Group } from '../group.model';
@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  dataArr:any;

group = new Group();
  

  constructor(private as:ApiService) { }

  

  ngOnInit(): void {
    this.getGroupData();
  }

getGroupData()
{
  this.as.getData().subscribe(res=>
    {
      this.dataArr=res;
    })
}

 insertData(){
this.as.insertData(this.group).subscribe(res=>{
this.getGroupData();
}) }

}
