import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomatchComponent } from './infomatch.component';

describe('InfomatchComponent', () => {
  let component: InfomatchComponent;
  let fixture: ComponentFixture<InfomatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfomatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
