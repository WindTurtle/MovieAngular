import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaClusterComponent } from './cinema-cluster.component';

describe('CinemaClusterComponent', () => {
  let component: CinemaClusterComponent;
  let fixture: ComponentFixture<CinemaClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
