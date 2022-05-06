import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, OnChanges {
  @Input() receive: any;
  result: any;
  constructor() {}

  ngOnInit(): void {
    this.compute();
  }

  ngOnChanges() {
    this.compute();
  }

  compute() {
    switch (this.receive.op) {
      case 1:
        this.result = this.receive.first + this.receive.second;
        break;
      case 2:
        this.result = this.receive.first - this.receive.second;
        break;
      case 3:
        this.result = this.receive.first / this.receive.second;
        break;
      case 4:
        this.result = this.receive.first * this.receive.second;
        break;
    }
  }
}