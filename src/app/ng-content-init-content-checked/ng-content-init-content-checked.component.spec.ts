import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentInitContentCheckedComponent } from './ng-content-init-content-checked.component';

describe('NgContentInitContentCheckedComponent', () => {
  let component: NgContentInitContentCheckedComponent;
  let fixture: ComponentFixture<NgContentInitContentCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContentInitContentCheckedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgContentInitContentCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
