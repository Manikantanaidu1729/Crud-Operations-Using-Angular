import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServiceComponent } from './http-service.component';

describe('HttpServiceComponent', () => {
  let component: HttpServiceComponent;
  let fixture: ComponentFixture<HttpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
