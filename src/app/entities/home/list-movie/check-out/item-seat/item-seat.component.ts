import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-seat',
  templateUrl: './item-seat.component.html',
  styleUrls: ['./item-seat.component.scss'],
})
export class ItemSeatComponent implements OnInit {
  trangThaiDatGhe: boolean = false;

  @Input() ghe;
  @Output() chooseSeat = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  chonGhe() {
    this.trangThaiDatGhe = !this.trangThaiDatGhe;

    const objGhe = {
      ghe: this.ghe,
      trangThaiDatGhe: this.trangThaiDatGhe,
    };

    this.chooseSeat.emit(objGhe);
  }
}
