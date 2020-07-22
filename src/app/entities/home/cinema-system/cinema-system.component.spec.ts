import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaSystemComponent } from './cinema-system.component';

describe('CinemaSystemComponent', () => {
  let component: CinemaSystemComponent;
  let fixture: ComponentFixture<CinemaSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
