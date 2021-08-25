import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Group } from '../group.model';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
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



}
