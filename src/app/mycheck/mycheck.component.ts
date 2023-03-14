import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MycheckService } from '../mycheck.service';




@Component({
  selector: 'app-mycheck',
  templateUrl: './mycheck.component.html',
  styleUrls: ['./mycheck.component.css']
})
export class MycheckComponent implements OnInit{


  input:FormControl;
  message:string;

  constructor(private service:MycheckService){}

  ngOnInit(){
    this.input = new FormControl('');
    this.message = 'mydata list';
  }
  getData(){
    return this.service.data;
  }
  getList(){
    return this.service.list;
  }


  doAction(){
    this.service.getList().subscribe((result:any)=>{
      console.log("test1:" + result);
    })
  }
  
}
