import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { DetailMovieComponent } from './list-movie/detail-movie/detail-movie.component';
import { BookSlotComponent } from './list-movie/book-slot/book-slot.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //Trang chủ
      {
        path: '',
        component: TrangChuComponent,
      },
      //List movie
      {
        path: 'list-movie',
        component: ListMovieComponent,
      },
      {
        path: 'detail-movie/:id',
        component: DetailMovieComponent,
      },
      {
        path: 'booking-movie/:id',
        component: BookSlotComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
