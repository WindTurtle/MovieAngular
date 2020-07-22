import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  Register(formValue) {
    const infoAccount = {
      taiKhoan: formValue.Account,
      matKhau: formValue.Password,
      email: formValue.Email,
      soDt: formValue.Phone,
      maNhom: 'GP09',
      maLoaiNguoiDung: 'KhachHang',
      hoTen: formValue.Name,
    };
    const url = 'QuanLyNguoiDung/DangKy';
    this.dataService.post(url, infoAccount).subscribe((data) => {
      Swal.fire({
        text: 'Register Successful!',
        icon: 'success',
      });
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    });
  }
}
