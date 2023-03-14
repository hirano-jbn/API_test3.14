import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // apiUrl = "http://localhost:3000/user";
  // d1 = data;
  message:string = '';

  constructor(private httpclient:HttpClient) { }

  // getSamples(){
  //   this.httpclient.get('/assets/data.json')
  //   .subscribe((d:data)=>{
  //     this.message = d.user_id;
  //   })
  //   return this.httpclient.get('/assets/data.json')
  // }
}
