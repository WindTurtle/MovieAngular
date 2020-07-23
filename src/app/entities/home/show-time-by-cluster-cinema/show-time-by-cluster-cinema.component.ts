import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-time-by-cluster-cinema',
  templateUrl: './show-time-by-cluster-cinema.component.html',
  styleUrls: ['./show-time-by-cluster-cinema.component.scss'],
})
export class ShowTimeByClusterCinemaComponent implements OnInit {
  @Input() maHeThongRap;
  @Input() maCumRap;
  listShowTime = [];
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getShowtimesFromAPI();
  }

  getShowtimesFromAPI() {
    const url = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${this.maHeThongRap}&&maNhom=GP09`;
    this.movieService.get(url).subscribe((data) => {
      this.listShowTime = data;
    });
  }
  bookingSlot(maLichChieu, tenPhim) {
    this.router.navigate(['/booking-movie', maLichChieu], {
      queryParams: { tenPhim: tenPhim },
    });
  }
}
