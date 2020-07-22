import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  account: string = '';
  constructor() {}

  ngOnInit(): void {
    this.account = localStorage.getItem('userLogin');
  }

  Logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}
