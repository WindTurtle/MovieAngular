import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss'],
})
export class ItemMovieComponent implements OnInit {
  @Input() movie;
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {}

  watchTrailer() {
    this.movieService.sharingDataDetailMovie(this.movie);
  }
  detailMovie() {
    this.router.navigate(['/detail-movie', this.movie.maPhim], {
      queryParams: { tenPhim: this.movie.tenPhim },
    });
  }
}
