import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDecoratorCToPComponent } from './output-decorator-c-to-p.component';

describe('OutputDecoratorCToPComponent', () => {
  let component: OutputDecoratorCToPComponent;
  let fixture: ComponentFixture<OutputDecoratorCToPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputDecoratorCToPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutputDecoratorCToPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
