import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecoratorPToCComponent } from './input-decorator-p-to-c.component';

describe('InputDecoratorPToCComponent', () => {
  let component: InputDecoratorPToCComponent;
  let fixture: ComponentFixture<InputDecoratorPToCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDecoratorPToCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputDecoratorPToCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
