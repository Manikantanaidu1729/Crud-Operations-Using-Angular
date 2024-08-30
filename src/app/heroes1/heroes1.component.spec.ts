import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroes1Component } from './heroes1.component';

describe('Heroes1Component', () => {
  let component: Heroes1Component;
  let fixture: ComponentFixture<Heroes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heroes1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heroes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
