import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
})
export class NumberInputComponent implements OnInit {
  @Output() firstNumber = new EventEmitter<any>();
  @Output() secondNumber = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  numberInput(value: string, which: number) {
    let emitValue = {
      value: parseInt(value),
      which: which,
    };

    which === 0
      ? this.firstNumber.emit(emitValue)
      : this.secondNumber.emit(emitValue);
  }
}
