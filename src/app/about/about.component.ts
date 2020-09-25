import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   name:string ='sai'
   age:number=24;
  constructor() { }

  ngOnInit(): void {
    alert(this.name);
  }

}
