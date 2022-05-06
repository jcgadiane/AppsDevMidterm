import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the receiveFromInput function', () => {
    let spyCompute = spyOn(component, "receiveFromInput").and.callThrough();
    fixture.detectChanges();
    component.receiveFromInput(1);
    expect(spyCompute).toHaveBeenCalled();
  });

  it('should change the first number in receiveFromInput', () => {
    component.receiveFromInput(Object({ value: 5, which: 0 }));
    expect(component.firstNumber).toBe(5);
  });

  it('should change the second number in receiveFromInput', () => {
    component.receiveFromInput(Object({ value: 5, which: 1 }));
    expect(component.secondNumber).toBe(5);
  });

  it('should call the receiveOperation function', () => {
    let spyCompute = spyOn(component, "receiveOperation").and.callThrough();
    fixture.detectChanges();
    component.receiveOperation(1);
    expect(spyCompute).toHaveBeenCalledTimes(1);
  });

  it('should call the receiveOperation function and call the function sendValue inside the function', () => {
    let spyCompute = spyOn(component, "receiveOperation").and.callThrough();
    let spySendValue = spyOn(component, "sendValue").and.callThrough();
    fixture.detectChanges();
    component.receiveOperation(1);
    expect(spySendValue).toHaveBeenCalled();
    expect(spyCompute).toHaveBeenCalledTimes(1);
  });

  it('should change the value of selectedOperation in receiveOperation', () => {
    component.receiveOperation(1);
    expect(component.selectedOperation).toBe(1);
  });

  it('should set operation to true in receiveOperation', () => {
    component.receiveOperation(1);
    expect(component.operation).toBe(true);
  });

  it('should call the receiveOperation function and change the value of selectedOperation and set operation to true', () => {
    let spyCompute = spyOn(component, "receiveOperation").and.callThrough();
    let spySendValue = spyOn(component, "sendValue").and.callThrough();
    fixture.detectChanges();
    component.receiveOperation(1);
    expect(component.operation).toEqual(true);
    expect(component.selectedOperation).toEqual(1);
    expect(spySendValue).toHaveBeenCalled();
    expect(spyCompute).toHaveBeenCalledTimes(1);
  });

  it('should call the sendValue function', () => {
    let spyCompute = spyOn(component, "sendValue").and.callThrough();
    fixture.detectChanges();
    component.sendValue();
    expect(spyCompute).toHaveBeenCalledTimes(1);
  });

  it('should increment count in sendValue', () => {
    let increment = component.count;
    let spyCompute = spyOn(component, "sendValue").and.callThrough();
    fixture.detectChanges();
    component.sendValue();
    
    expect(component.count).toBe(increment+1);
  });

  it('should change the values in sendValue', () => {
    let spyCompute = spyOn(component, "sendValue").and.callThrough();
    fixture.detectChanges();
    component.sendValue();
    expect(component.value).toEqual({op: component.selectedOperation, first: component.firstNumber, second: component.secondNumber});
  });


});