import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMovieCarouselComponent } from './item-movie-carousel.component';

describe('ItemMovieCarouselComponent', () => {
  let component: ItemMovieCarouselComponent;
  let fixture: ComponentFixture<ItemMovieCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMovieCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMovieCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
