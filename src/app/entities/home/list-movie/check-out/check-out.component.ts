import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ItemSeatComponent } from './item-seat/item-seat.component';
import { DataService } from 'src/app/shared/services/data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  @ViewChildren(ItemSeatComponent) tagListItemGhe: QueryList<ItemSeatComponent>;
  @Input() room;
  slots: any = [];
  mangGheDangChon: any = [];
  account;
  cost: number;
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.account = localStorage.getItem('userLogin');
    this.slots = this.room.danhSachGhe;
  }
  chooseSeat(objGhe) {
    if (objGhe.trangThaiDatGhe) {
      const gheDangChon = {
        maGhe: objGhe.ghe.maGhe,
        giaVe: objGhe.ghe.giaVe,
      };
      this.mangGheDangChon.push(gheDangChon);
      this.cost = objGhe.ghe.giaVe * this.mangGheDangChon.length;
    } else {
      let index = this.mangGheDangChon.findIndex((item) => {
        return item.maGhe === objGhe.ghe.maGhe;
      });
      this.mangGheDangChon.splice(index, 1);
      this.cost = objGhe.ghe.giaVe * this.mangGheDangChon.length;
    }
  }

  datVe() {
    const thongTinDatVe = {
      maLichChieu: this.room.thongTinPhim.maLichChieu,
      danhSachVe: this.mangGheDangChon,
      taiKhoanNguoiDung: this.account,
    };
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        const url = 'QuanLyDatVe/DatVe';
        this.dataService
          .postWithHeader(url, thongTinDatVe)
          .subscribe((data) => {});
        Swal.fire({
          text: 'Checkout Successful!',
          icon: 'success',
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  }
  huy(index, ghe) {
    this.mangGheDangChon.splice(index, 1);
    this.tagListItemGhe.map((item) => {
      if (item.ghe.maGhe === ghe.maGhe) {
        item.trangThaiDatGhe = false;
      }
      this.cost = item.ghe.giaVe * this.mangGheDangChon.length;
    });
  }
}
