import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OperationComponent } from './operation.component';

describe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.operation, "emit")
  });

  it('should emit value', () => {
    let input = fixture.debugElement.query(By.css('.btn.btn-dark')).nativeElement;
    input.click();
    fixture.detectChanges();

    expect(component.operation.emit).toHaveBeenCalled();
  });
  it('should call value 1 when button is pressed/clicked', () => {
    let spyValue =  spyOn(component, "onButtonClick").and.callThrough();;
    let input = fixture.debugElement.query(By.css('#numone')).nativeElement;
    input.click();
    fixture.detectChanges();
    expect(component.operation.emit).toHaveBeenCalledWith(1);
    expect(spyValue).toHaveBeenCalled();
  });
  it('should call value 2 when button is pressed/clicked', () => {
    let spyValue =  spyOn(component, "onButtonClick").and.callThrough();;
    let input = fixture.debugElement.query(By.css('#numtwo')).nativeElement;
    input.click();
    fixture.detectChanges();
    expect(component.operation.emit).toHaveBeenCalledWith(2);
    expect(spyValue).toHaveBeenCalled();
  });
  it('should call value 3 when button is pressed/clicked', () => {
    let spyValue =  spyOn(component, "onButtonClick").and.callThrough();;
    let input = fixture.debugElement.query(By.css('#numthree')).nativeElement;
    input.click();
    fixture.detectChanges();
    expect(component.operation.emit).toHaveBeenCalledWith(3);
    expect(spyValue).toHaveBeenCalled();
  });
  it('should call value 4 when button is pressed/clicked', () => {
    let spyValue =  spyOn(component, "onButtonClick").and.callThrough();;
    let input = fixture.debugElement.query(By.css('#numfour')).nativeElement;
    input.click();
    fixture.detectChanges();
    expect(component.operation.emit).toHaveBeenCalledWith(4);
    expect(spyValue).toHaveBeenCalled();
  });
});
