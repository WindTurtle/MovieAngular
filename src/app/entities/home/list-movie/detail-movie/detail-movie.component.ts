import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  maPhim: any;
  tenPhim: any;
  movie: any;
  showShortShowTimes = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // this.getBackdropUrl();
    this.getParamsFromURL();
    this.getDetailMovie();
  }

  getParamsFromURL() {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.queryParamMap.subscribe(({ params }: any) => {
      this.tenPhim = params.tenPhim;
    });
  }

  getDetailMovie() {
    const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
    this.movieService.get(url).subscribe((data: any) => {
      this.movie = data;
    });
  }

  alterShowtimes() {
    this.showShortShowTimes = !this.showShortShowTimes;
  }
  watchTrailer() {
    this.movieService.sharingDataDetailMovie(this.movie);
  }
  // getBackdropUrl() {
  //   return this.domSanitizer.bypassSecurityTrustResourceUrl(this.movie.hinhAnh);
  // }
}
