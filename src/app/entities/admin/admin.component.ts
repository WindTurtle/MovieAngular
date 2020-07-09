import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  loginUser;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('adminToken');
    if (token) {
      this.router.navigate(['admin/dashboard']);
    }
  }
  login(loginUser) {
    const url = 'QuanLyNguoiDung/DangNhap';
    this.dataService.post(url, loginUser).subscribe((data: any) => {
      if (data.maLoaiNguoiDung === 'QuanTri') {
        localStorage.setItem('adminToken', JSON.stringify(data.accessToken));
        this.router.navigate(['admin/dashboard']);
      }
    });
  }
}
