import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  onSendService(formData:FormData):Observable<any>{
   return this.http.post<any>('http://localhost/',formData)
   
  }
}
