import { Component, OnInit } from '@angular/core';
import { relative } from 'path';
import { summaryFileName } from '@angular/compiler/src/aot/util';


@Component({
  selector: 'app-akhil',
  templateUrl: './akhil.component.html',
  styleUrls: ['./akhil.component.css']
})
export class AkhilComponent implements OnInit {
  
  c:any = [];
  d:any=[];
  z:number;
  totalAmount: number =0;
  item: string;
  ip: any=[];
  ip1:any=[];
  ip2:string;
  nameOfItem: string;
  incomes: any=[];
  incomesAB: any=[];
  expensivesSum:number;
  
  incomeItemNames: any = [];
  expensives: any = [];
  expensivesAB: any = [];
  expensivesItemNames: any = [];

  constructor() { }

  ngOnInit() {

  }
  addFunc() {
    this.ip={'price':this.ip1,
     'itemName': this.ip2}

    if (this.ip.price > 0) {
      this.incomes.push(this.ip)
      this.incomesAB.push(this.ip.price)
      // this.incomeItemNames.push(this.ip.itemName) 
       }
    else {
      this.expensives.push(this.ip)
      this.expensivesAB.push(this.ip.price)
      // this.expensivesItemNames.push(this.ip.itemName)
    }

    var incomesSum = this.incomesAB.reduce(function (a, b) {
      return a + b;
    }, 0);
    var expensivesSum = this.expensivesAB.reduce(function (a, b) {
      return a + b;
    }, 0);
   
    this.totalAmount = incomesSum + expensivesSum
  //   this.c = this.c++;
  //  this.d = this.d++;
  //  this.z = this.c+this.d;
  //  this.totalAmount = this.z
 
  
  }
  deleteIC(income){
     this.incomes = this.incomes.filter((item) => item !== income);
     this.totalAmount=this.totalAmount-income.price
  } 
  deleteEP(expensive){
    this.totalAmount=this.totalAmount-(expensive.price)
    this.expensives = this.expensives.filter((item) => item !== expensive);
    
 }
}

