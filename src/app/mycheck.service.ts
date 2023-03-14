import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

class MyData{
  data:string = '';
  list:Person[] = [];
}

class Person{
  user_group_id:string;
  user_group_name:string;
  // person_responsible:string;
  // children:[];
}


const httpOptions = {
  headers: new HttpHeaders(
    // 'x-api-key','0ySbHmow9mZk5ft6Q6ae2Ebu01gETMU5eroqAFVd'
  )
};

@Injectable({
  providedIn: 'root'
})
export class MycheckService {
  private mydata:MyData = new MyData();

  constructor(private client:HttpClient ) {
    this.client.get('http://localhost:3000/test')
    .subscribe((result:any) => {
      this.mydata.list = result;
    });
   }

   getList():Observable<any>{
    // let tests;
    return this.client.post<any>('https://lyg4kf4ra0.execute-api.ap-northeast-1.amazonaws.com/ccs/user_group/list',httpOptions)
   }




   get(n:number){
    return this.mydata.list[n];
   }
   get size(){
    return this.list.length;
   }
   get list(){
    return this.mydata.list;
   }
   get data(){
    return this.mydata.data;
   }


}
