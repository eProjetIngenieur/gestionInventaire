import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  dataArr:any;
  fourArr:any;
  constructor(private httpClient:HttpClient) { }

  
  getData(){ 
    return this.httpClient.get('http://127.0.0.1:8000/group');
 }

 insertData(data)
 {
  return this.httpClient.post('http://127.0.0.1:8000/addgroup',data);

 }

 getInv(){
  return this.httpClient.get('http://127.0.0.1:8000/inv');

 }

insertInventaire(data){
  return this.httpClient.post('http://127.0.0.1:8000/addinventaire',data);

}


 getDataUser(){ 
  return this.httpClient.get('http://127.0.0.1:8000/user');
} 

insertDataUser(data)
{
 return this.httpClient.post('http://127.0.0.1:8000/adduser',data);

}

 
getDataArt(){ 
    return this.httpClient.get('http://127.0.0.1:8000/article');
 }
 insertDataArt(data)
 {
  return this.httpClient.post('http://127.0.0.1:8000/addArticle',data);

 }
 getFournisseur(){
  return this.httpClient.get('http://127.0.0.1:8000/fournisseur');
 }

 getType(){
  return this.httpClient.get('http://127.0.0.1:8000/type');

 }

 getLocal(){
  return this.httpClient.get('http://127.0.0.1:8000/local');

 }

 getFourID(data)
 {
  return this.httpClient.post('http://127.0.0.1:8000/fournisseurID',data);

 }
 getTypeID(data){
  return this.httpClient.post('http://127.0.0.1:8000/typeID',data);
 }
 getLocalID(data){
  return this.httpClient.post('http://127.0.0.1:8000/localID',data);
 }

 getGroupID(data)
 {
  return this.httpClient.post('http://127.0.0.1:8000/utilisateur',data);

 }

 getInventaire(data)
 {
  return this.httpClient.post('http://127.0.0.1:8000/inventaire',data);

 }
 
 deleteInventaire(){
   return this.httpClient.delete('http://127.0.0.1:8000/deleteInventaire');
 }
  
}