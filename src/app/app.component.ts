import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstNumber!: number;
  secondNumber!: number;
  operation = false;
  selectedOperation!: number;
  count = 0;
  value: any;

  receiveFromInput(received: any) {
    console.log(received);
    this.operation = false;
    received.which == 0
      ? (this.firstNumber = received.value)
      : (this.secondNumber = received.value);
  }

  receiveOperation(operation: number) {
    this.selectedOperation = operation;
    this.sendValue();
    this.operation = true;
  }

  sendValue() {
    this.count++;
    this.value = {
      first: this.firstNumber,
      second: this.secondNumber,
      op: this.selectedOperation,
    };
  }
}