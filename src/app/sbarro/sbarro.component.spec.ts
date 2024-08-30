import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbarroComponent } from './sbarro.component';

describe('SbarroComponent', () => {
  let component: SbarroComponent;
  let fixture: ComponentFixture<SbarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbarroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SbarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
