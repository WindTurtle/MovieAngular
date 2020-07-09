import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.scss'],
})
export class ShowtimeComponent implements OnInit {
  @Input() movie;
  grouped;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.getByValue();
  }

  bookingSlot(maLichChieu) {
    this.router.navigate(['/booking-movie', maLichChieu], {
      queryParams: { tenPhim: this.movie.tenPhim },
    });
  }
  getByValue() {
    this.grouped = this.groupBy(this.movie.lichChieu, (movie) =>
      movie.ngayChieuGioChieu.substr(0, 10)
    );
  }
  groupBy(movieList, keyGetter) {
    const map = new Map();
    movieList.filter((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
}
