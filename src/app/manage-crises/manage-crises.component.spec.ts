import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCrisesComponent } from './manage-crises.component';

describe('ManageCrisesComponent', () => {
  let component: ManageCrisesComponent;
  let fixture: ComponentFixture<ManageCrisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCrisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageCrisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
