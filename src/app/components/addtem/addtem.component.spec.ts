import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtemComponent } from './addtem.component';

describe('AddtemComponent', () => {
  let component: AddtemComponent;
  let fixture: ComponentFixture<AddtemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
