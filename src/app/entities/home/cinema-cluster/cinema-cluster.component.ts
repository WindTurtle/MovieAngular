import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-cinema-cluster',
  templateUrl: './cinema-cluster.component.html',
  styleUrls: ['./cinema-cluster.component.scss'],
})
export class CinemaClusterComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  listCinemaCluster = [];
  @Input() systemCinemaID;
  ngOnInit(): void {
    this.getCinemaClusterFromAPI();
    this.listCinemaCluster.map((item) => {

    });
  }

  getCinemaClusterFromAPI() {
    const url = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.systemCinemaID}`;
    this.movieService.get(url).subscribe((data) => {
      this.listCinemaCluster = data;
    });
  }
  
}
