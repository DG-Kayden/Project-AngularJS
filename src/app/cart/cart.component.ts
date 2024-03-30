import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataCart: any; // Mảng chứa thông tin sản phẩm đã thêm vào giỏ hàng
  totalAmount: number = 0; // Tổng số tiền trong giỏ hàng
  

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.getLasCart();
  }

  deleteItemCart(dataPro: any) {
    this.commonService.deleteCart(dataPro).subscribe((res) => {
      this.getLasCart();
    });
  }

  getLasCart() {
    this.commonService.listAllCart().subscribe((res) => {
      this.dataCart = res;
      console.log(this.dataCart);
      this.calculateTotalAmount();
    });
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.dataCart.reduce((total: number, item: any) => total + item.price, 0);
  }

  changQuantity(calculation: string, value: any) {
    if (calculation == '-') {
      if (value.quantity < 2) {
        alert("Số lượng sản phẩm phải lớn hơn 0")
        value.quantity=1
      }else{
         value.quantity-=1
      }
    } else {
      value.quantity+=1
    }
    this.http.put(`http://localhost:3000/cart/${value.id}`, value).subscribe()
  }


}
