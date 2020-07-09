import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  @Input() room;
  slots = [];
  constructor() {}

  ngOnInit(): void {
    this.slots = this.room.danhSachGhe.slice(0, 57);
  }
}
