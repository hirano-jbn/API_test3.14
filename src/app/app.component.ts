import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jsontest';
  Data:Data[] = [];

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    // this.dataService.getSamples().subscribe((data: Data[])=>{this.Data = data;});
  }
}
