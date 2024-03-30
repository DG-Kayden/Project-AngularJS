import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, of, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'vnCurrency'
})
export class CommonService {

  isLog: boolean = false;
  cartItems: any;
  constructor(private _http: HttpClient) {
  }

  //Đổi tiền tệ
  transform(value: number): string {
    // Định dạng giá trị tiền tệ theo định dạng của Việt Nam
    const formattedValue = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(value);

    return formattedValue;
  }
  // cart nhaaaaaaaaaa
  getToCart(productId: any) {
    return this._http.get<any>(`http://localhost:3000/product/${productId}`);
  }

  addToCart(productId: any) {
    return this._http.post("http://localhost:3000/cart", productId);
  }
  // 
  listAllCart() {
    return this._http.get("http://localhost:3000/cart");
  }

  logout() {
    this.isLog = false;
  }

  login(body: any): Observable<any> {
    // Lấy danh sách tất cả người dùng từ server
    return this._http.get<any[]>("http://localhost:3000/user").pipe(
      mergeMap((users: any[]) => {
        // Tìm người dùng trong danh sách với email và mật khẩu tương ứng
        const user = users.find(u => u.email === body.email && u.password === body.password);
        if (user) {
          // Nếu tìm thấy, trả về thông tin người dùng
          return of(user);
        } else {
          // Nếu không tìm thấy, tạo lỗi với hàm factory và trả về
          return new Observable(observer => {
            observer.error('Invalid credentials');
          });
        }
      })
    );
  }

  createCategory(dataCat: any) {
    // lưu vào database
    return this._http.post("http://localhost:3000/category", dataCat);
  }

  createProduct(dataProduct: any, additionalData: any, description: any, image: any, addcatId: any) {
    // Kết hợp dữ liệu bổ sung vào dữ liệu sản phẩm
    const requestData = { ...dataProduct, ...additionalData, ...description, ...image, ...addcatId };

    // Lưu vào database
    return this._http.post("http://localhost:3000/product", requestData);
  }


  listAllCategory() {
    return this._http.get("http://localhost:3000/category");
  }

  updateCategory(dataCat: any) {
    console.log(dataCat.id);
    return this._http.put("http://localhost:3000/category/" + dataCat.id, dataCat);
  }

  updateProduct(dataProduct: any) {
    console.log(dataProduct);
    return this._http.put("http://localhost:3000/product/" + dataProduct.id, dataProduct);
  }



  deleteCategory(dataCat: any) {
    console.log(dataCat.id);
    return this._http.delete("http://localhost:3000/category/" + dataCat.id);
  }

  deleteProduct(dataPro: any) {
    console.log(dataPro.id);
    return this._http.delete("http://localhost:3000/product/" + dataPro.id);
  }

  deleteCart(dataPro: any) {
    return this._http.delete("http://localhost:3000/cart/" + dataPro.id);

  }

  listAllProduct() {
    return this._http.get("http://localhost:3000/product");
  }

  listProductByCat(catId: any) {
    console.log(catId);
    return this._http.get("http://localhost:3000/product?catId=" + catId);
  }

  getProById(id: any) {
    return this._http.get("http://localhost:3000/product?id=" + id);

  }
}
