import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  movie: any;
  previewUrl = '';
  constructor(
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.movieService.ShareDetailMovie.subscribe((data) => {
      this.movie = data;
    });
  }
  getPreviewUrl() {
    this.previewUrl = this.movie.trailer;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl);
  }
}
