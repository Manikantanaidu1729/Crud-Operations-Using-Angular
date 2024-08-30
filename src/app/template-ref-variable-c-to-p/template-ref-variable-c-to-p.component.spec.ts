import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefVariableCToPComponent } from './template-ref-variable-c-to-p.component';

describe('TemplateRefVariableCToPComponent', () => {
  let component: TemplateRefVariableCToPComponent;
  let fixture: ComponentFixture<TemplateRefVariableCToPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRefVariableCToPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateRefVariableCToPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
