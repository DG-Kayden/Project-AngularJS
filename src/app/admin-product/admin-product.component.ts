import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  dataProduct: any;
  file: string = '';
  isActive: boolean = false;
  objPro = {
    id: "",
    proName: "",
    description: "",
    image: "",
    price: "",
    catId: "",
  }

  constructor(private CommonService: CommonService) { }

  ngOnInit(): void {
    this.getLastProduct();
  }

  addNewPro(formValue: any) {
    this.isActive = false;
    console.log(this.isActive);
    console.log(formValue);
    // Dữ liệu bổ sung cần thêm vào
    const additionalData = { proPrice: formValue.proPrice };
    const addDescription = { description: formValue.description };
    const addImage = { image: this.file };
    const addcatId = { catId: formValue.catId };
    this.CommonService.createProduct(formValue, additionalData, addDescription, addImage, addcatId).subscribe((res) => {
      console.log("Thêm thành công");
      this.getLastProduct();
      this.objPro.proName = '';
    });
  }

  getLastProduct() {
    this.CommonService.listAllProduct().subscribe((res) => {
      this.isActive = true;
      this.dataProduct = res;
      console.log(this.dataProduct);
    })
  }

  // lấy dữ liệu để sữa 
  editPro(dataProduct: any) {
    this.isActive = true;
    this.objPro = dataProduct;
  }
  updateProduct(dataPro: any) {
    this.isActive = false;
    dataPro['image'] = this.objPro.image;
    this.CommonService.updateProduct(this.objPro).subscribe((res) => {
      this.getLastProduct();
      // this.objPro.catName = '';
    })
  }

  deleteProduct(dataPro: any) {
    console.log(dataPro);
    this.CommonService.deleteProduct(dataPro).subscribe((res) => {
      this.getLastProduct();
    })
  }

  onChange(event: any) {
    const str = event.target.files[0].name;
    this.file = 'assets/images/' + str;
  }
  change() {
    this.isActive = false;
  }
}
