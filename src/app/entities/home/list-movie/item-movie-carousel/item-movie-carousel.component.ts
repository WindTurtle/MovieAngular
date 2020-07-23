import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-item-movie-carousel',
  templateUrl: './item-movie-carousel.component.html',
  styleUrls: ['./item-movie-carousel.component.scss'],
})
export class ItemMovieCarouselComponent implements OnInit {
  listMovie: any = [];
  constructor(private movieService: MovieService) {}

  customOptions: OwlOptions = {
    loop: true,
    center: true,
    dots: false,
    nav: true,
    margin: 20,
    navSpeed: 1200,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  };
  ngOnInit(): void {
    this.getListMovieFromAPI();
  }

  getListMovieFromAPI() {
    const url = 'QuanLyPhim/LayDanhSachPhim?maNhom=GP09';
    this.movieService.get(url).subscribe((data) => {
      this.listMovie = data;
    });
  }
}
