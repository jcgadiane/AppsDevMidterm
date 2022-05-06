import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.firstNumber, "emit");
    spyOn(component.secondNumber, "emit");
  });

  it('should contain first number text content', () => {
    let label = fixture.debugElement.query(By.css('#first')).nativeElement;
    expect(label.textContent).toBe('First Number');
  });
  it('should contain second number text content', () => {
    let label = fixture.debugElement.query(By.css('#second')).nativeElement;
    expect(label.textContent).toBe('Second Number');
  });


  it('should change the firstNumber variable when getNumber is called with which of 0', () => {
    component.numberInput('1',0);
    expect(component.firstNumber.emit).toHaveBeenCalledWith(Object({ value: 1, which: 0 }));
  });

  it('should change the secondNumber variable when getNumber is called with which of 1', () => {
    component.numberInput('5',1);
    expect(component.secondNumber.emit).toHaveBeenCalledWith(Object({ value: 5, which: 1 }));
  });

  it('should call numberInput when number is input in firstNumber field', () => {
    let spyNumberInput = spyOn(component, "numberInput").and.callThrough();
    let input = fixture.debugElement.query(By.css('#firstInput')).nativeElement;
    input.value = '1';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(spyNumberInput).toHaveBeenCalled();
  })

  
  it('should call numberInput when number is input in secondNumber field', () => {
    component.numberInput('5', 1);
    expect(component.secondNumber.emit).toHaveBeenCalledWith(Object({ value: 5, which: 1 }));
    
    let spyNumberInput = spyOn(component, "numberInput").and.callThrough();
    let input = fixture.debugElement.query(By.css('#secondInput')).nativeElement;
    input.value = '2';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(spyNumberInput).toHaveBeenCalled();
    expect(component.secondNumber.emit).toHaveBeenCalledWith(Object({ value: 2, which: 1 }));
  })
});
