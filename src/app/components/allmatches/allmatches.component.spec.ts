import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmatchesComponent } from './allmatches.component';

describe('AllmatchesComponent', () => {
  let component: AllmatchesComponent;
  let fixture: ComponentFixture<AllmatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
