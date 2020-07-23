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
import { PipeModule } from 'src/app/shared/pipe/pipe.module';
import { ShortcutPipe } from 'src/app/shared/pipe/shortcut.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ItemSeatComponent } from './list-movie/check-out/item-seat/item-seat.component';
import { RegisterComponent } from './register/register.component';
import { CinemaSystemComponent } from './cinema-system/cinema-system.component';
import { CinemaClusterComponent } from './cinema-cluster/cinema-cluster.component';
import { ShowTimeByClusterCinemaComponent } from './show-time-by-cluster-cinema/show-time-by-cluster-cinema.component';

// Import the library
import { CarouselModule } from 'ngx-owl-carousel-o';
// Needs to import the BrowserAnimationsModule
import { ItemMovieCarouselComponent } from './list-movie/item-movie-carousel/item-movie-carousel.component';
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
    LoginComponent,
    ItemSeatComponent,
    RegisterComponent,
    CinemaSystemComponent,
    CinemaClusterComponent,
    ShowTimeByClusterCinemaComponent,
    ItemMovieCarouselComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipeModule,
    FormsModule,
    CarouselModule,
  ],
})
export class HomeModule {}
