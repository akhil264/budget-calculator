import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.css']
})
export class CricketersComponent implements OnInit {
ind = true;
aus = false;
wi = false;

 IndCricketers=[
    {
          name: 'yuvarj',
          age: 38,
          testRuns: 1900,
          odiRuns: 8701,
          image: 'assets/yuvraj.jpg'
    
        },
        {
          name: 'sachin',
          age: 47,
          testRuns: 15921,
          odiRuns: 18426,
          image: 'assets/sachin.jpg'
        },
        {
          name: 'dhoni',
          age: 39,
          testRuns: 15921,
          odiRuns: 4876,
          image: 'assets/dhoni.jpg'
        },
        {
          name: 'sehwag',
          age: 41,
          testRuns: 8586,
          odiRuns: 8273,
          image: 'assets/sehwag.jpg'
        }
        
  ]
  Auscricketers = [
    {
      name: 'DAVID WARNER',
      age: 33,
      testRuns: 7244,
      odiRuns: 5267,
      image: 'assets/david.jpg'

    },
    {
      name: 'ADAM GILCHRIST',
      age: 48,
      testRuns: 5570,
      odiRuns: 9619,
      image: 'assets/gilchrist.jpg'
    },
    {
      name: 'RICKY PONTING',
      age: 45,
      testRuns: 13378,
      odiRuns: 13704,
      image: 'assets/Ponting.jpg'
    },
    {
      name: 'STEVEN SMITH',
      age: 31,
      testRuns: 7227,
      odiRuns: 4162,
      image: 'assets/smith.jpeg'
    }   
  ]
    Wicricketers=[
      {
        name: 'CHRIS GAYLE ',
        age: 40,
        testRuns: 7215,
        odiRuns: 10480,
        image: 'assets/gayle.jpg'
  
      },
      {
        name: 'CHANDERPAUL ',
        age: 45,
        testRuns: 11867,
        odiRuns: 8778,
        image: 'assets/chanderpaul.jpg'
      },
      {
        name: 'BRIAN LARA ',
        age: 51,
        testRuns: 11953,
        odiRuns: 10405,
        image: 'assets/lara.jpg'
      },
      {
        name: 'VIV RICHARDS',
        age: 68,
        testRuns: 8540,
        odiRuns: 6721,
        image: 'assets/richards.jpg'
      }  
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
