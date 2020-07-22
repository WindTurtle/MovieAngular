import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimeByClusterCinemaComponent } from './show-time-by-cluster-cinema.component';

describe('ShowTimeByClusterCinemaComponent', () => {
  let component: ShowTimeByClusterCinemaComponent;
  let fixture: ComponentFixture<ShowTimeByClusterCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTimeByClusterCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTimeByClusterCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
