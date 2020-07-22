import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.scss'],
})
export class BookSlotComponent implements OnInit {
  maLichChieu: any;
  tenPhim: any;
  room: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getParamsFromURL();
    this.getBookingMovie();
  }

  getParamsFromURL() {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.queryParamMap.subscribe(({ params }: any) => {
      this.tenPhim = params.tenPhim;
    });
  }

  getBookingMovie() {
    const url = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.maLichChieu}`;
    this.movieService.get(url).subscribe((data: any) => {
      this.room = data;
    });
  }
}
