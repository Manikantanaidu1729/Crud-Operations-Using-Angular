import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildDecoratorCToPComponent } from './viewchild-decorator-c-to-p.component';

describe('ViewchildDecoratorCToPComponent', () => {
  let component: ViewchildDecoratorCToPComponent;
  let fixture: ComponentFixture<ViewchildDecoratorCToPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildDecoratorCToPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewchildDecoratorCToPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
