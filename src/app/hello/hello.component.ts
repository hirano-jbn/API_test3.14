import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';

class MyData{
  data:string = '';
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit{
  title:string = "";
  message:string = "";

  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.title = 'Hello-app';
    this.message ='';
    this.getData()
  }

  getData(){
    // this.httpClient.get('http://localhost:3000/list')
    // .subscribe((result:any) =>{
    //   this.message = 'data: ' + result[0].user_group_id;
    // });
  }
  
}
