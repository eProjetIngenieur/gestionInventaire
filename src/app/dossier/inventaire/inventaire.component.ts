import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Inventaire } from '../inventaire.model';
import { ApiService } from '../api.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css']
})
export class InventaireComponent implements OnInit {
  dataArr:any;
  currentVal="";
  id_local:any;
  loocalArr:any;
  invArr:any;

  inventaire = new Inventaire();

  
  constructor(private as:ApiService) { }

  dateTime:Date=new Date();

  ngOnInit(): void {
    this.getInventaireData();
    this.dateTime= new Date();
  }

  @ViewChild('content', {static:false}) el!:ElementRef;
  downloadPDF(){
    console.log("downloading pdf ..");
    let doc = new jsPDF('p','pt','a4');
    doc.html(this.el.nativeElement, {
      callback: (doc)=> {
          doc.save("inventaire.pdf");
      }
    }); 

  }

  deleteInventaire(){
    this.as.deleteInventaire().subscribe(res=>{
      this.getInventaireData();
    })
  }

  getVal(val){

    console.warn(val.target.value)
    this.currentVal=val.target.value
     var obj={
        num_inventaire:val.target.value,
    

    }
    this.as.getInventaire(obj).subscribe(res=>{
      this.dataArr=res;  
      console.warn(res);

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

getInventaireData(){
  this.as.getInv().subscribe(res=>
    {
      this.invArr=res;
    })
}

insertInventaire(){
  this.as.insertInventaire(this.inventaire).subscribe(res=>{
  this.getInventaireData();
  }) }

}
