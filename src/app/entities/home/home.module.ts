import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { HeaderComponent } from 'src/app/layouts/header/header.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';
import { HomeComponent } from './home.component';
import { ItemMovieComponent } from './list-movie/item-movie/item-movie.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { DetailMovieComponent } from './list-movie/detail-movie/detail-movie.component';
import { ShowtimeComponent } from './list-movie/showtime/showtime.component';
import { BookSlotComponent } from './list-movie/book-slot/book-slot.component';
import { CheckOutComponent } from './list-movie/check-out/check-out.component';

@NgModule({
  declarations: [
    HomeComponent,
    TrangChuComponent,
    ListMovieComponent,
    HeaderComponent,
    FooterComponent,
    ItemMovieComponent,
    ModalComponent,
    DetailMovieComponent,
    ShowtimeComponent,
    BookSlotComponent,
    CheckOutComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
