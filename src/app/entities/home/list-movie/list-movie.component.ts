import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  listMovie: any = [];
  constructor(private movieService: MovieService) {}

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
