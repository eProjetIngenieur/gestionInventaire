import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from '../article.model';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  dataArr:any;
  fourArr:any;
  typeArr:any;
  artArr:any;
  typeeArr:any;
  localArr:any;
  loocalArr:any;


  article = new Article();    

  constructor(private as:ApiService) { }

  ngOnInit(): void {
    this.getArticleData();
    this.getFournisseur();
    this.getType();
    this.getLocal();
  }

  getArticleData()
{
  this.as.getDataArt().subscribe(res=>
    {
      this.dataArr=res;
    })
}
  insertData(){
    this.as.insertDataArt(this.article).subscribe(res=>{
    this.getArticleData();
    }) 
   
  }

  getFourID(event){
    var obj = {
      id_fournisseur:event.target.value
    }
    this.as.getFourID(obj).subscribe(res=>{
            this.artArr=res;
    });

  }

  getFournisseur(){
    this.as.getFournisseur().subscribe(res=>{
      this.fourArr=res;
    })
  }
  getType(){
    this.as.getType().subscribe(res=>{
      this.typeArr=res;
    })
  }
  getTypeID(event){
    var obj = {
      id_type:event.target.value
    }
    this.as.getTypeID(obj).subscribe(res=>{
            this.typeeArr=res;
    });
  }


  getLocal(){
    this.as.getLocal().subscribe(res=>{
      this.localArr=res;
    })
  }

  getLocalID(event){
    var obj = {
      id_affectation:event.target.value
    }
    this.as.getLocalID(obj).subscribe(res=>{
            this.loocalArr=res;
    });
  }
}
