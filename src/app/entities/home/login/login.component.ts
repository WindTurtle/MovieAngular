import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin', { static: false }) formLogin;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  Login(formValue) {
    const infoAccount = {
      taiKhoan: formValue.Account,
      matKhau: formValue.Password,
    };
    const url = 'QuanLyNguoiDung/DangNhap';
    this.dataService.post(url, infoAccount).subscribe((data) => {
      localStorage.setItem('userLogin', data.taiKhoan);
      localStorage.setItem('accessToken', data.accessToken);
      Swal.fire({
        text: 'Login Successful!',
        icon: 'success',
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    });
  }
}
