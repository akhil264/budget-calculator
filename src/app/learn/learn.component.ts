import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  // allowNewServer = false;
  serverV = 'akhil';
  // some:any =[];
  serverName = '';
  username = '';
  serverWasCreated = false;
  constructor() {
    // setTimeout(()=>{
    //   this.allowNewServer = true;
    // },2000)
   }

  ngOnInit() {
  }
  onAdd(){
    this.serverWasCreated = true;
    this.serverV = this.username;
  }
//   onUpdate(event : Event){

// this.serverName = (<HTMLInputElement>event.target).value;
//   }

}
