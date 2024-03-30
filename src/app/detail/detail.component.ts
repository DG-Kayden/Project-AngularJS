import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {


  constructor(private CommonService: CommonService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  id: any;

  productId: any;
  itemPro: any;
  quantity: number = 1;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id); // Kiểm tra xem id đã được gán đúng chưa
      this.getProductById(this.id);
    });
  }


  // Trong component.ts
  getProductById(id: any) {
    console.log(id); // Kiểm tra xem id đã được truyền đúng chưa
    this.CommonService.getProById(id).subscribe((res) => {
      console.log(res); // Kiểm tra dữ liệu trả về từ API
      this.itemPro = res;
      console.log(this.itemPro);
    });
  }


  addToCart() {
    if (this.quantity <= 0) {
      alert("Phải nhập số lượng sản phẩm lớn hơn 0")
    }
    else {
      let quantity: number = this.quantity;
      this.CommonService.getToCart(this.id).subscribe(
        response => {
          // console.log('Product added to cart successfully:', response);
          alert("Thêm vào giỏ hàng thành công");
          // Thực hiện xử lý khi thêm vào giỏ hàng thành công ở đây
          // Ví dụ: cập nhật thông tin giỏ hàng trên giao diện, hiển thị thông báo, chuyển hướng, v.v.
          response.quantity = quantity;
          // Sau khi xử lý thành công, lưu dữ liệu vào API
          this.saveToAPI(response).subscribe(
            (result: any) => {
              console.log('Data saved to API successfully:', result);
              // Thực hiện xử lý khi dữ liệu được lưu vào API thành công
            },
            (error: any) => {
              console.error('Error saving data to API:', error);
              // Xử lý lỗi khi lưu dữ liệu vào API
            }
          );
        },
        error => {
          alert("Thêm vào giỏ hàng không thành công");

          console.error('Error adding product to cart:', error);
          // Xử lý lỗi khi thêm vào giỏ hàng
        }
      );
    }
  }

  saveToAPI(data: any) {
    // Gọi API để lưu dữ liệu vào API
    return this.http.post('http://localhost:3000/cart', data);
  }
}



