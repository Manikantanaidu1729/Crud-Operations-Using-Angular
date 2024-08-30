import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgViewInitViewCheckedComponent } from './ng-view-init-view-checked.component';

describe('NgViewInitViewCheckedComponent', () => {
  let component: NgViewInitViewCheckedComponent;
  let fixture: ComponentFixture<NgViewInitViewCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgViewInitViewCheckedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgViewInitViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
