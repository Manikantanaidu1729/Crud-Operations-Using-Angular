import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildViewchildrenComponent } from './viewchild-viewchildren.component';

describe('ViewchildViewchildrenComponent', () => {
  let component: ViewchildViewchildrenComponent;
  let fixture: ComponentFixture<ViewchildViewchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildViewchildrenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewchildViewchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
