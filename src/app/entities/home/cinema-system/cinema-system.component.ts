import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-cinema-system',
  templateUrl: './cinema-system.component.html',
  styleUrls: ['./cinema-system.component.scss'],
})
export class CinemaSystemComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  listCinemaSystem: any = [];
  ngOnInit(): void {
    this.getCinemaSystemFromAPI();
  }

  getCinemaSystemFromAPI() {
    const url = 'QuanLyRap/LayThongTinHeThongRap';
    this.movieService.get(url).subscribe((data) => {
      this.listCinemaSystem = data;
    });
  }
}
