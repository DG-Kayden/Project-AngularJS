import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.css']
})
export class ToppageComponent implements OnInit {
  dataCat: any

  constructor(public CommonService: CommonService, private router: Router) {

  }
  ngOnInit(): void {
    this.getLastCategory();
  }

  onLogout() {
    // Đăng xuất bằng cách gọi phương thức logout trong CommonService:
    alert("Đăng xuất thành công")
    this.CommonService.logout();
    // Sau khi đăng xuất, bạn có thể thực hiện các thao tác khác, như chuyển hướng người dùng đến trang đăng nhập:
    this.router.navigate([""]);
  }

  getLastCategory() {
    this.CommonService.listAllCategory().subscribe((res) => {
      this.dataCat = res;
    })
  }
}
