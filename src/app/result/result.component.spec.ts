import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    component.receive = 1;
    fixture.detectChanges();
  });

  it('should call the compute function', () => {
    let spyCompute = spyOn(component, "compute").and.callThrough();
    fixture.detectChanges();
    component.compute();
    expect(spyCompute).toHaveBeenCalledTimes(1);
  });

  it('should call the compute function with operator 1 (addition) and the result of both numbers being added together', () => {
    component.receive = {op: 2, first: 10, second: 2};
    let spyCompute = spyOn(component, "compute").and.callThrough();
    fixture.detectChanges();
    component.compute();
    expect(spyCompute).toHaveBeenCalledTimes(1);
    expect(component.result).toBe(component.receive.first - component.receive.second);
    console.log(component.result, component.receive.first, component.receive.second);
  });

  it('should call the compute function with operator 2 (subtraction) and the result of both numbers being subtracted together', () => {
    component.receive = {op: 2, first: 10, second: 2}
    let spyCompute = spyOn(component, "compute").and.callThrough();
    fixture.detectChanges();
    component.compute();
    expect(spyCompute).toHaveBeenCalledTimes(1);
    expect(component.result).toBe(component.receive.first - component.receive.second);
    console.log(component.result, component.receive.first, component.receive.second);
  });

  it('should call the compute function with operator 3 (division) and the result of both numbers being divided together', () => {
    component.receive = {op: 3, first: 10, second: 2}
    let spyCompute = spyOn(component, "compute").and.callThrough();
    fixture.detectChanges();
    component.compute();
    expect(spyCompute).toHaveBeenCalledTimes(1);
    expect(component.result).toBe(component.receive.first / component.receive.second);
    console.log(component.result, component.receive.first, component.receive.second);
  });

  it('should call the compute function with operator 4 (multiplication) and the result of both numbers being multiplied together', () => {
    component.receive = {op: 4, first: 10, second: 2}
    let spyCompute = spyOn(component, "compute").and.callThrough();
    fixture.detectChanges();
    component.compute();
    expect(spyCompute).toHaveBeenCalledTimes(1);
    expect(component.result).toBe(component.receive.first * component.receive.second);
    console.log(component.result, component.receive.first, component.receive.second);
  });



});