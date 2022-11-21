import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  inp1: number;
  inp2: number;
  result: number


  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.result = parseInt(String(this.inp1)) + parseInt(String(this.inp2));
  }

  apf() {
    this.result = this.inp1 - this.inp2;
  }

  core() {
    this.result = this.inp1 * this.inp2;
  }

  divide() {
    this.result = this.inp1 / this.inp2;
  }
}
