import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  name: any = "aaaa"
  age: number = 25
  cricketers = [
    {
      name: 'sachin',
      age: 45,
      place: 'mumbai',
      image:''
    },
    {
      name: 'm sdhoni',
      age: 40,
      place: 'ranchi'
    },
    {
      name: 'v kohli',
      age: 35,
      place: 'delhi'
    },
  ]

  abc = false

  constructor() { }
  ngOnInit(): void {
  }
  calling() {
    alert("calling is clicked")
  }
}
