import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
  @Output() operation = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onButtonClick(value: number) {
    this.operation.emit(value);
  }
}
